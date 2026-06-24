import pandas as pd

# -----------------------------
# Load Dataset Once
# -----------------------------

df = pd.read_csv("data/eventDataset.csv")

# -----------------------------
# Basic Cleaning
# -----------------------------

# Fill text columns
object_cols = df.select_dtypes(include=["object"]).columns
df[object_cols] = df[object_cols].fillna("Unknown")

# Fill numeric columns
numeric_cols = df.select_dtypes(include=["number"]).columns
df[numeric_cols] = df[numeric_cols].fillna(0)

# Convert datetime

if "start_datetime" in df.columns:
    df["start_datetime"] = pd.to_datetime(
    df["start_datetime"],
    errors="coerce"
)


# ===================================================
# Dashboard Statistics
# ===================================================

def get_dashboard():

    total_events = len(df)

    active_events = len(
        df[df["status"].str.lower() == "active"]
    )

    road_closure = int(
        df["requires_road_closure"].sum()
    )

    if "priority" in df.columns:

        high_risk = len(
            df[df["priority"].str.lower() == "high"]
        )

    else:

        high_risk = 0

    return {

        "total_events": total_events,

        "high_risk": high_risk,

        "road_closure": road_closure,

        "active_events": active_events

    }


# ===================================================
# Recent Events
# ===================================================

# ===================================================
# Recent Events
# ===================================================


def get_recent_events(page=1, limit=10):

    page = int(page)
    limit = int(limit)

    recent = (
        df.sort_values(
            "start_datetime",
            ascending=False
        )
        .reset_index(drop=True)
    )

    total_records = len(recent)
    total_pages = (total_records + limit - 1) // limit

    start = (page - 1) * limit
    end = start + limit

    recent = recent.iloc[start:end]

    events = []

    for _, row in recent.iterrows():

        risk = "Medium"

        if row.get("priority", "") == "High":
            risk = "High"

        elif row.get("priority", "") == "Low":
            risk = "Low"

        events.append({

            "event": row["event_type"],
            "cause": row["event_cause"],
            "risk": risk,
            "zone": row["zone"],
            "status": row["status"]

        })

    return {

        "events": events,
        "page": page,
        "limit": limit,
        "total_pages": total_pages,
        "total": total_records

    }

# ===================================================
# Map Data
# ===================================================

# ===================================================
# Map Data
# ===================================================

def get_map_events():

    # Show only active events
    map_df = df[
        df["status"].str.lower() == "active"
    ].copy()

    # Show latest active events only
    if "start_datetime" in map_df.columns:
        map_df = map_df.sort_values(
            "start_datetime",
            ascending=False
        )

    # Limit markers
    map_df = map_df.head(100)

    events = []

    for _, row in map_df.iterrows():

        if pd.isna(row["latitude"]) or pd.isna(row["longitude"]):
            continue

        priority = str(row.get("priority", "")).lower()

        if priority == "high":
            risk = "High"
        elif priority == "low":
            risk = "Low"
        else:
            risk = "Medium"

        events.append({

            "lat": float(row["latitude"]),
            "lng": float(row["longitude"]),

            "risk": risk,

            "cause": row["event_cause"],

            "event": row["event_type"],

            "zone": row["zone"],

            "status": row["status"]

        })

    return events

# ===================================================
# Analytics
# ===================================================

def get_analytics():

    event_distribution = (

        df["event_cause"]

        .value_counts()

        .reset_index()

    )

    event_distribution.columns = [

        "name",

        "value"

    ]

    manpower = [

        {

            "risk": "Low",

            "officers": 4

        },

        {

            "risk": "Medium",

            "officers": 8

        },

        {

            "risk": "High",

            "officers": 15

        }

    ]

    return {

        "event_distribution": event_distribution.to_dict(

            orient="records"

        ),

        "manpower": manpower

    }