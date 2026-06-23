# recommendation.py

RESOURCE_RULES = {

    "vehicle_breakdown": {
        "officers": 4,
        "barricades": 2,
        "emergency": "Tow Truck",
        "delay": 15,
        "diversion": False
    },

    "accident": {
        "officers": 8,
        "barricades": 4,
        "emergency": "Ambulance",
        "delay": 25,
        "diversion": True
    },

    "construction": {
        "officers": 10,
        "barricades": 8,
        "emergency": "Construction Crew",
        "delay": 35,
        "diversion": True
    },

    "water_logging": {          # ✅ changed
        "officers": 8,
        "barricades": 6,
        "emergency": "BBMP Water Drainage Team",
        "delay": 30,
        "diversion": True
    },

    "public_event": {           # ✅ changed
        "officers": 15,
        "barricades": 10,
        "emergency": "Medical Team",
        "delay": 40,
        "diversion": True
    },

    "tree_fall": {
        "officers": 6,
        "barricades": 4,
        "emergency": "Forest Department",
        "delay": 25,
        "diversion": True
    },

    "pot_holes": {
        "officers": 3,
        "barricades": 3,
        "emergency": "Road Maintenance Team",
        "delay": 20,
        "diversion": False
    },

    "road_conditions": {
        "officers": 5,
        "barricades": 4,
        "emergency": "Road Safety Team",
        "delay": 20,
        "diversion": False
    },

    "congestion": {
        "officers": 7,
        "barricades": 2,
        "emergency": "Traffic Police",
        "delay": 30,
        "diversion": True
    },

    "vip_movement": {
        "officers": 20,
        "barricades": 15,
        "emergency": "Traffic Police",
        "delay": 45,
        "diversion": True
    },

    "procession": {
        "officers": 15,
        "barricades": 12,
        "emergency": "Traffic Police",
        "delay": 40,
        "diversion": True
    },

    "protest": {
        "officers": 18,
        "barricades": 15,
        "emergency": "Police Force",
        "delay": 50,
        "diversion": True
    },

    "Debris": {
        "officers": 4,
        "barricades": 2,
        "emergency": "Cleaning Team",
        "delay": 15,
        "diversion": False
    },

    "debris": {
        "officers": 4,
        "barricades": 2,
        "emergency": "Cleaning Team",
        "delay": 15,
        "diversion": False
    },

    "Fog / Low Visibility": {
        "officers": 8,
        "barricades": 6,
        "emergency": "Traffic Police",
        "delay": 35,
        "diversion": True
    },

    "test_demo": {
        "officers": 2,
        "barricades": 1,
        "emergency": "Demo Team",
        "delay": 10,
        "diversion": False
    },

    "others": {
        "officers": 5,
        "barricades": 2,
        "emergency": "General Response Team",
        "delay": 20,
        "diversion": False
    }
}

def recommend_resources(event_cause, predicted_risk, road_closure, event_type):

    event_cause = event_cause.lower()

    rule = RESOURCE_RULES.get(event_cause, RESOURCE_RULES["others"])

    officers = rule["officers"]
    barricades = rule["barricades"]
    delay = rule["delay"]
    emergency = rule["emergency"]
    diversion = rule["diversion"]

    if predicted_risk == "High":
        officers += 5
        barricades += 3
        delay += 10

    if event_type == "planned":
        officers += 2
        barricades += 2

    if road_closure:
        diversion = True
        barricades += 4
        delay += 10

    score = min(100, officers + barricades + delay)

    if score >= 80:
        severity = "Critical"
    elif score >= 60:
        severity = "High"
    elif score >= 40:
        severity = "Medium"
    else:
        severity = "Low"

    return {
        "severity": severity,
        "congestion_score": score,
        "officers": officers,
        "barricades": barricades,
        "delay": delay,
        "diversion": diversion,
        "emergency": emergency
    }