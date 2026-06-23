import joblib

model = joblib.load("models/traffic_model.pkl")

encoders = joblib.load("models/label_encoders.pkl")

target = joblib.load("models/target_encoder.pkl")

print(type(model))
print(type(encoders))
print(encoders)
print(target.classes_)