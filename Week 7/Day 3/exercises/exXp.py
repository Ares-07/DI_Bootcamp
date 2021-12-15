import numpy as np
import pandas as pd
from math import sqrt
from sklearn.model_selection import train_test_split
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
iris_df = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')

def euclidean_distance(row1, row2):
    '''calculate the Euclidean distance between two vectors - Last column of each row ignored'''
    distance = 0.0
    for i in range(len(row1)-1):
        distance += (row1[i] - row2[i])**2
    return sqrt(distance)

def get_neighbors(train_df, test_row, num_neighbors):
    '''Locate the most similar neighbors'''
    distances = list()
    array = train_df.X_train.to_numpy()
    for row in array:
        dist = euclidean_distance(row, test_row)
        distances.append((train_row, dist))
        distances.sort(key=lambda tup: tup[1])
    neighbors = list()
    for i in range(num_neighbors):
        neighbors.append(distances[i][0])
    return neighbors


class KNNClassifier():
    def __init__(self, X_train, X_test, y_train, y_test):
        self.X_train = X_train
        self.X_test = X_test
        self.y_train = y_train
        self.y_test = y_test

    def predict(self,test_row, num_neighbors):
        '''receives the test data and return the predicted labels'''
        neighbors = get_neighbors(self.X_train.to_numpy(), test_row, num_neighbors)
        print(neighbors)
        output_values = [y_train.values for row in neighbors]
        print(output_values)
        prediction = max(set(output_values), key=output_values.count)
        return prediction

    def fit(self, test_df, num_neighbors):
        '''receives the training data X and labels y and train the model'''
        predictions = list()
        for row in test_df.to_numpy():
            output = self.predict(row, num_neighbors)
            predictions.append(output)
        return predictions

dataset = [
[2.7810836, 2.550537003, 0],
[1.465489372, 2.362125076, 0],
[3.396561688, 4.400293529, 0],
[1.38807019, 1.850220317, 0],
[3.06407232, 3.005305973, 0],
[7.627531214, 2.759262235, 1],
[5.332441248, 2.088626775, 1],
[6.922596716, 1.77106367, 1],
[8.675418651, -0.242068655, 1],
[7.673756466, 3.508563011, 1]
]
df = pd.DataFrame(dataset, columns=['X1','X2','Y'])
print(df)

# separate target (dependent variables) and features (independent variables) - Target in last column
col_hdr = list(df.columns.values)
y = df[col_hdr[-1]]
X = df.drop([col_hdr[-1]], axis = 1)
# dispatch data into Train and Test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
# create instance of KNNClassifier
newdf = KNNClassifier(X_train, X_test, y_train, y_test)
