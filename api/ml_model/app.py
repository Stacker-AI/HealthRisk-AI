import joblib
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler()

class Prediction(self):
    def preprocessing(self, data):
        scaled_data = scaler.fit_transform(data)
        print(scaled_data)