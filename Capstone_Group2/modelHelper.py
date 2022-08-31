# data science libraries
import numpy as np
import pandas as pd
from collections import Counter

# tree based algorithms
from sklearn.ensemble import ExtraTreesClassifier

# machine learning processing and metrics
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, roc_auc_score, roc_curve
from sklearn.preprocessing import StandardScaler, MinMaxScaler, LabelEncoder
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
from sklearn.metrics import accuracy_score

import datetime
import time
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(self, Anion_gap, Bicarbonate, Lactic_acid, Leucocyte,
       Urine_output, RDW, INR, Comorbidities,
       Systolic_blood_pressure, Diastolic_blood_pressure):

        input_pred = [[Anion_gap, Bicarbonate, Lactic_acid, Leucocyte,
       Urine_output, RDW, INR, Comorbidities,
       Systolic_blood_pressure, Diastolic_blood_pressure]]

        # load final model
        filename = 'MortalityPredict_ExtraTreesClassifier.sav'
        et = pickle.load(open(filename, 'rb'))

        X = pd.DataFrame(input_pred, columns = ['Anion gap', 'Bicarbonate', 'Lactic acid', 'Leucocyte',
       'Urine output', 'RDW', 'INR', 'Comorbidities',
       'Systolic blood pressure', 'Diastolic blood pressure'])
       
        # load scaler
        import joblib
        sc=joblib.load('std_scaler.bin')
        X = sc.transform(X)

        preds_singular = et.predict(X)
        return preds_singular[0]