# 🚦 TrafficAI – AI Powered Traffic Congestion Prediction & Resource Management

TrafficAI is an AI-driven web application developed to help traffic authorities predict congestion caused by planned and unplanned road events before they become critical.

The system uses a Machine Learning model trained on historical Bengaluru traffic event data to predict traffic risk levels and intelligently recommend resource allocation such as police officers, barricades, emergency response teams, diversion requirements, and estimated traffic delays.

Unlike traditional traffic monitoring systems that react after congestion occurs, TrafficAI enables proactive traffic management through predictive analytics.

---

# 🌐 Live Demo

Frontend: [https://your-vercel-url.vercel.app](https://traffic-ai-jade.vercel.app/)

Backend API: [https://your-render-url.onrender.com](https://trafficai-z765.onrender.com)

---

# ✨ Features

## 🤖 AI Traffic Risk Prediction
- Predicts traffic congestion risk (High / Medium / Low)
- Uses trained Machine Learning model
- Real-time prediction through REST APIs

---

## 🚓 Smart Resource Recommendation
Automatically recommends:

- Police Officers
- Barricades
- Emergency Response Team
- Expected Delay
- Diversion Requirement

based on predicted traffic severity.

---

## 🗺 Interactive Traffic Map

- Built using Leaflet + OpenStreetMap
- Displays only Active traffic events
- Color-coded event markers
- Popup with event information

---

## 📊 Analytics Dashboard

Interactive charts built using Recharts:

- Event Distribution
- Police Deployment by Risk
- Dashboard Statistics

---

## 📋 Recent Traffic Events

- Latest traffic incidents
- Pagination support
- Risk indicators
- Event status

---

## 🧠 AI Traffic Intelligence Report

After prediction the system generates a detailed traffic intelligence report containing:

- Event Summary
- Predicted Risk
- Resource Recommendation
- Traffic Delay
- Road Closure Status
- Diversion Recommendation

---

# 🏗 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Icons
- React Leaflet
- Recharts

---

## Backend

- Python
- Flask
- Flask-CORS
- Pandas
- NumPy
- Joblib
- Scikit-Learn

---

## Machine Learning

Model trained using historical Bengaluru traffic event dataset.

Algorithms experimented during development include:

- Random Forest Classifier ✅ (Final Model)
- Decision Tree
- Logistic Regression
- Gradient Boosting (evaluation)

Final trained model:

- `traffic_model.pkl`

Supporting files:

- `label_encoders.pkl`
- `target_encoder.pkl`

---

# 📂 Project Structure

```
TrafficAI
│
├── backend
│   ├── app.py
│   ├── preprocess.py
│   ├── data_service.py
│   ├── recommendation.py
│   ├── models
│   │     ├── traffic_model.pkl
│   │     ├── label_encoders.pkl
│   │     └── target_encoder.pkl
│   ├── data
│   │     └── eventDataset.csv
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │     ├── components
│   │     ├── assets
│   │     ├── App.jsx
│   │     └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙ Machine Learning Workflow

The prediction pipeline follows these steps:

1. User enters traffic event information.
2. Backend preprocesses the input.
3. Categorical values are encoded using saved Label Encoders.
4. Date and time features are extracted.
5. Features are arranged exactly as during training.
6. Trained ML model predicts congestion risk.
7. Resource recommendation engine generates deployment suggestions.
8. Results are displayed on the dashboard.

---

# 📊 Input Features

The model uses features such as:

- Event Type
- Event Cause
- Latitude
- Longitude
- End Latitude
- End Longitude
- Vehicle Type
- Road Closure Requirement
- Corridor
- Police Station
- Zone
- Date & Time
- Day
- Month
- Weekday
- Weekend Indicator

---

# 📈 Prediction Output

The system predicts:

- Traffic Risk
- Police Officers Required
- Barricades Required
- Emergency Team
- Estimated Delay
- Diversion Required
- Traffic Intelligence Report

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/TrafficAI.git
```

```bash
cd TrafficAI
```

---

# Backend Setup

Go to backend directory

```bash
cd backend
```

Create virtual environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run backend

```bash
python app.py
```

Backend runs at

```
http://127.0.0.1:5000
```

---

# Frontend Setup

Move to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Production Build

Create production build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | Backend Status |
| POST | /predict | Predict Traffic Risk |
| GET | /dashboard | Dashboard Statistics |
| GET | /events | Active Traffic Events |
| GET | /analytics | Dashboard Analytics |
| GET | /recent-events | Paginated Recent Events |

---

# Dataset

The project is trained using a historical Bengaluru traffic events dataset containing information related to:

- Event Types
- Event Causes
- Locations
- Vehicle Categories
- Corridors
- Police Stations
- Zones
- Road Closure Information
- Time Features
- Congestion Levels

The dataset is preprocessed before training and inference.

---

# Future Enhancements

- Live Google Maps Integration
- Real-time Traffic API
- CCTV Video Analytics
- Accident Detection using Computer Vision
- Weather-aware Predictions
- Dynamic Route Optimization
- Citizen Alert System
- Traffic Signal Optimization
- Live Vehicle Tracking
- Deployment Optimization using Reinforcement Learning

---

~ Developed as part of **Gridlock Hackathon 2.0**

