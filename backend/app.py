from data_service import (
    get_dashboard,
    get_recent_events,
    get_map_events,
    get_analytics
)

from flask import Flask, request, jsonify
from flask_cors import CORS

import joblib

from preprocess import preprocess_input
from recommendation import recommend_resources

app = Flask(__name__)
CORS(app)

# -------------------------
# Load Models
# -------------------------

model = joblib.load("models/traffic_model.pkl")
encoders = joblib.load("models/label_encoders.pkl")
target_encoder = joblib.load("models/target_encoder.pkl")

# IMPORTANT: Replace this list with the exact order from training
training_columns = [
    "event_type",
    "latitude",
    "longitude",
    "endlatitude",
    "endlongitude",
    "event_cause",
    "requires_road_closure",
    "veh_type",
    "corridor",
    "police_station",
    "zone",
    "hour",
    "day",
    "month",
    "weekday",
    "is_weekend",
]


@app.route("/")
def home():

    return jsonify({
        "message": " AI Traffic Backend Running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    if not request.is_json:
        return jsonify({"error": "Invalid input format, expected JSON"}), 400
    
    data = request.get_json()

    processed = preprocess_input(data, encoders)

    processed = processed[training_columns]

    prediction = model.predict(processed)[0]

    # risk = target_encoder.inverse_transform([prediction])[0]
    prediction = int(prediction)

    risk_map = {
        0: "High",
        1: "Low",
        2: "Medium"
    }

    risk = risk_map[prediction]

    recommendation = recommend_resources(
        data["event_cause"],
        risk,
        data["requires_road_closure"],
        data["event_type"],
    )

    return jsonify({

    "event": data["event_type"],

    "cause": data["event_cause"],

    "predicted_risk": str(risk),

    "officers": int(recommendation["officers"]),

    "barricades": int(recommendation["barricades"]),

    "delay": recommendation["delay"],

    "emergency": recommendation["emergency"],

    "road_closure": bool(data["requires_road_closure"]),

    "diversion": bool(recommendation["diversion"])

})

@app.route("/dashboard")
def dashboard():

    return jsonify(get_dashboard())

@app.route("/events")
def events():

    return jsonify(get_map_events())

@app.route("/recent-events")
def recent_events():

    return jsonify(get_recent_events())

@app.route("/analytics")
def analytics():

    return jsonify(get_analytics())

if __name__ == "__main__":
    app.run(debug=True)