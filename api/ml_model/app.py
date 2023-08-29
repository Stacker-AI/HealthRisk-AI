import joblib
import pandas as pd
from dotenv import load_dotenv

load_dotenv()

# Load the model and scaler
path_model = os.path.normpath(PATH_MODEL)
path_scaler = os.path.normpath(PATH_SCALER)

model = joblib.load(path_model)
scaler = joblib.load(path_scaler)

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
