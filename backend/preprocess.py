import pandas as pd
import numpy as np


def preprocess_input(data, encoders):

    df = pd.DataFrame([data])

    # Convert datetime
    df["start_datetime"] = pd.to_datetime(df["start_datetime"])

    df["hour"] = df["start_datetime"].dt.hour
    df["day"] = df["start_datetime"].dt.day
    df["month"] = df["start_datetime"].dt.month
    df["weekday"] = df["start_datetime"].dt.weekday
    df["is_weekend"] = (df["weekday"] >= 5).astype(int)

    df.drop(columns=["start_datetime"], inplace=True)

    categorical = [
        "event_type",
        "event_cause",
        "veh_type",
        "corridor",
        "police_station",
        "zone",
    ]

    for col in categorical:

        value = str(df.loc[0, col])

        le = encoders[col]

        if value not in le.classes_:
            value = "Unknown" if "Unknown" in le.classes_ else le.classes_[0]

        df[col] = le.transform([value])[0]

    df["requires_road_closure"] = (
        df["requires_road_closure"]
        .astype(bool)
        .astype(int)
    )

    return df