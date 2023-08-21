import joblib
import pandas as pd

scaler = joblib.load(r'api\ml_model\MinMaxScaler.joblib')
model = joblib.load(r'api\ml_model\RandomForestClassifier.joblib')

class Prediction:
    def preprocessing(self, data):
        print('Performing preprocessing..\n\n')
        df = pd.DataFrame().from_dict([data])
        columns_to_scale = ['bmi', 'diabetes', 'genHlth', 'mentHlth', 'physHlth', 'age', 'education', 'income']
        columns_to_transform = ['highBP', 'highChol', 'cholCheck', 'smoker', 'stroke', 'physActivity', 'fruits', 'veggies', 'hvyAlcoholConsump', 'anyHealthcare', 'noDocbcCost', 'diffWalk', 'sex']
        df[columns_to_scale] = scaler.transform(df[columns_to_scale])
        df[columns_to_transform] = df[columns_to_transform].replace({'true': True, 'false': False}).astype(int)
        df_toPredict = df[['highBP', 'highChol', 'cholCheck', 'bmi', 'smoker', 'stroke', 'diabetes', 'physActivity', 'fruits', 'veggies', 'hvyAlcoholConsump', 'anyHealthcare', 'noDocbcCost', 'genHlth', 'mentHlth', 'physHlth', 'diffWalk', 'sex', 'age', 'education', 'income']]
        return df_toPredict
    
    def predict(self, df_toPredict):
        print('Predicting result..\n\n')
        result = model.predict(df_toPredict.values)
        return result[0]


    def main(self, data):
        df_toPredict = self.preprocessing(data)
        result = self.predict(df_toPredict)
        return result
