# HealthRiskAI-FullStack

The HealthRiskAI App is designed to predict the risk of a heart attack using machine learning. It provides a user-friendly interface to input relevant medical data and receive a prediction about the likelihood of a heart attack.

## Features

- Predicts heart attack risk based on input data.
- User-friendly web interface.
- Utilizes a pre-trained ml model.

## Requirements

- Python 3.x
- Django
- scikit-learn
- Other dependencies listed in `requirements.txt`

## Setup and Running the App

### Backend

1. Clone this repository:
  ```
git clone https://github.com/Stacker-AI/HealthRisk-AI
  ```
2. Navigate to the project directory:
  ```
cd HealthRisk-AI
```
3. Create a virtual environment:
  ```
python3 -m venv venv
  ```
4. Activate the virtual environment:
  ```
venv\Scripts\activate
  ```
Extra Step: 
  ```
Add all Django env to the path.
  ```
5. Install the required dependencies:
  ```
pip install -r requirements.txt
  ```
6. Run database migrations:
  ```
python3 manage.py makemigrations

python3 manage.py migrate

python3 manage.py migrate --run-syncdb
  ```
7. Start the development server:
  ```
python3 manage.py runserver
  ```
8. Access the app in your web browser:
  ```
http://localhost:8000/
  ```

### Frontend

1. Run the Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

2. Browse the App 🙂

## Using the App

1. Access the web interface by visiting the provided URL.
2. Fill out the medical data form with relevant information.
3. Click the "Predict" button to obtain the heart attack risk prediction.
4. The app will display the prediction result along with relevant information.

