import pandas as pd
import numpy as np

url = 'https://raw.githubusercontent.com/justmarkham/DAT8/master/data/chipotle.tsv'
chipo = pd.read_csv(url, sep = '\t')

"""1. Getting & Knowing Your Data"""

# # See the first 10 entries
# print(chipo.head(10))

# # What is the number of observations in the dataset?
# print(chipo.shape[0])

# # What is the number of columns in the dataset?
# print(chipo.shape[1])

# # Print the name of all the columns.
# print(chipo.columns)

# # How is the dataset indexed?
# print(chipo.index)

# # Which was the most ordered item?
# print(chipo.item_name.value_counts().head(1))

# # How many items were ordered?
# print(chipo.item_name.unique().shape[0])

# # What was the most ordered item in the choice_description column?
# print(chipo.choice_description.value_counts().head())

# # How many items were orderd in total?
# print(chipo.quantity.sum())
#
# # Turn the item price into a float
# def num_float(x):
#     return float(x[1:-1])
# chipo.item_price = chipo.item_price.apply(num_float)
# print(chipo.head())
#
# # How much was the revenue for the period in the dataset?
# print(chipo.item_price.sum())
#
# # How many orders were made in the period?
# print(chipo.order_id.value_counts().count())
#
# # What is the average amount per order?
# order_grouped = chipo.groupby(by=['order_id']).sum()
# print(order_grouped['quantity'].mean())
#
# # How many different items are sold?
# chipo['unit_price'] = (chipo['item_price'] / chipo['quantity'])
# new = chipo[['item_name', 'choice_description', 'unit_price']]
# print(new.sort_values(by='unit_price', ascending=False))

"""2. Filtering & Sorting"""

# # How many products cost more than $10.00?
# chipo['item_price'] = chipo['item_price'].str.replace('$', '')
# chipo['item_price'] = chipo['item_price'].astype(float)
# print(np.count_nonzero(chipo.item_price>10.00))
# # What is the price of each item?
# # print a data frame with only two columns item_name and item_price
# chipo1 = chipo.groupby(by ="item_name")[["item_price"]].min().reset_index()
# print(chipo1)
# # Sort by the name of the item
# print(chipo.sort_values(by = "item_name",ascending=True).reset_index(drop=True))
# # What was the quantity of the most expensive item ordered?
# quan_ex = np.where(chipo.item_price == chipo.item_price.max(),chipo.quantity,0)
# for i in quan_ex:
#     if i!=0:
#         print("Quantity of the most expensive item ordered is : ",i)
# # How many times were a Veggie Salad Bowl ordered?
# temp = np.count_nonzero(chipo.item_name == "Veggie Salad Bowl")
# print(temp,"times a Veggie Salad Bowl was ordered")
# # How many times people orderd more than one Canned Soda?
# temp1 = np.count_nonzero((chipo.item_name == "Canned Soda") & (chipo.quantity > 1))
# print(temp1,"times people orderd more than one Canned Soda")

"""3. Grouping"""

# users = pd.read_csv('https://raw.githubusercontent.com/justmarkham/DAT8/master/data/u.user', sep='|')
#
# # Discover what is the mean age per occupation
# print(users.groupby('occupation').mean()['age'])
#
# # Discover the Male ratio per occupation and sort it from the most to the least
# users_by_occ = users.groupby(['occupation','gender'])['user_id'].count()
# occ_ratios = users_by_occ / users_by_occ.groupby(level=0).sum() * 100
# print(occ_ratios.iloc[occ_ratios.index.get_level_values('gender') == '''M'''].sort_values(ascending=False))
#
# # For each occupation, calculate the minimum and maximum ages
# print(users.groupby(['occupation'])['age'].max())
# print(users.groupby(['occupation'])['age'].min())
#
# # For each combination of occupation and gender, calculate the mean age
# print(users.groupby(['occupation','gender'])['age'].mean())
#
# # For each occupation present the percentage of women and men
# print(users_by_occ / users_by_occ.groupby(level=0).sum() * 100)


"""4. Merge"""

# #Create the 3 DataFrames based on the followin raw data
# raw_data_1 = {
# 'subject_id': ['1', '2', '3', '4', '5'],
# 'first_name': ['Alex', 'Amy', 'Allen', 'Alice', 'Ayoung'],
# 'last_name': ['Anderson', 'Ackerman', 'Ali', 'Aoni', 'Atiches']}
# raw_data_2 = {
# 'subject_id': ['4', '5', '6', '7', '8'],
# 'first_name': ['Billy', 'Brian', 'Bran', 'Bryce', 'Betty'],
# 'last_name': ['Bonder', 'Black', 'Balwner', 'Brice', 'Btisan']}
# raw_data_3 = {
# 'subject_id': ['1', '2', '3', '4', '5', '7', '8', '9', '10', '11'],
# 'test_id': [51, 15, 15, 61, 16, 14, 15, 1, 61, 16]}
#
# #Assign each to a variable called data1, data2, data3
# data1 = pd.DataFrame.from_dict(raw_data_1)
# data2 = pd.DataFrame.from_dict(raw_data_2)
# data3 = pd.DataFrame.from_dict(raw_data_3)
#
# #Join the two dataframes along rows and assign all_data
# all_data = pd.concat([data1,data2])
#
# #Join the two dataframes along columns and assing to all_data_col
# all_data_col = pd.concat([data1,data2],axis = 1)
#
# #Print data3
# print(data3)
#
# #Merge all_data and data3 along the subject_id value
# merged7 = data3.set_index('subject_id').join(all_data.set_index('subject_id'))
#
# #Merge only the data that has the same 'subject_id' on both data1 and data2
# merged8 = data1.merge(data2, how = 'inner', on = ['subject_id'])
#
# #Merge all values in data1 and data2, with matching records from both sides where available.
# merged9 = data1.merge(data2, how = 'outer', on = ['subject_id'])

"""5. Deleting"""
# Assign it to a variable called iris
iris = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data',header=None)

#Create columns for the dataset
#1. sepal_length (in cm)
#2. sepal_width (in cm)
#3. petal_length (in cm)
#4. petal_width (in cm)
#5. class
iris.columns = ['sepal_length','sepal_width','petal_length','petal_width','class']

#Is there any missing value in the dataframe?
print(iris.isna().sum())

#Lets set the values of the rows 10 to 29 of the column 'petal_length' to NaN
iris.iloc[10:30,2] = np.nan

#Good, now lets substitute the NaN values to 1.0
iris = iris.fillna(1)
print(iris)

#Now let's delete the column class
iris = iris.drop(columns='class')
print(iris)

#Set the first 3 rows as NaN
iris.iloc[0:3,:] = np.nan

# Delete the rows that have NaN
iris = iris.dropna()
print(iris)

#Reset the index so it begins with 0 again
print(iris.reset_index())

#Create your own question and answer it.
