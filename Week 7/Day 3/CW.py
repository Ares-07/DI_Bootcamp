import pandas as pd
#
# # Target encoding example
# url = "https://raw.githubusercontent.com/selva86/datasets/master/Cars93_miss.csv"
# cars_df = pd.read_csv(url).dropna(subset=["Manufacturer", "Price"])
#
# # Calculate meaningful information, the mean(like average) price for each manufacturer
# means = cars_df[["Manufacturer", "Price"]].groupby("Manufacturer").mean()
# # means = {“Acura” : 29.9} -> means[“Acura”] <> means.loc[“Acura”, “Price”]
#
# # Add the above column to the original dataframe
# cars_df["Manufacturer_transformed"] = cars_df["Manufacturer"].map(lambda x: means.loc[x, "Price"])
#
# # Here we use .apply() - gives the same result as .map() and we replace
# #Manufacturer with its mean price
# cars_df["Manufacturer"] = cars_df["Manufacturer"].apply(lambda x: means.loc[x, "Price"])
#
# #Reminder, how we add new keys and values to dictionaries
# dict_1 = {"One": 1}
# dict_1["Two"] = 2
#
# #Replace NAN example
# cars_df["DriveTrain"].isna().sum()
# cars_df["DriveTrain"].value_counts()
# cars_df.fillna("Front", inplace = True)
# cars_df["DriveTrain"].value_counts()
#
# # Example for onehot encoding
# data = pd.read_csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv")
# data = pd.get_dummies(data, columns = ["species"])
#
#
# #exercise
# cars_df.fillna('USA', inplace = True)
# cars_df = pd.get_dummies(cars_df, columns=['Origin'])
# print(cars_df)


# # Exercise1
url = 'https://raw.githubusercontent.com/selva86/datasets/master/Cars93_miss.csv'
cars_df = pd.read_csv(url).dropna(subset=['Type', 'Price'])

median = cars_df[['Type','Price']].groupby("Type").median()
cars_df['Type_transformed'] = cars_df['Type'].dropna().apply(lambda x:median.loc[x,'Price'])
print(cars_df[["Type","Type_transformed","Price"]].head())




# exercise2
import numpy as np

url = 'https://raw.githubusercontent.com/selva86/datasets/master/Cars93_miss.csv'
mini =np.min(cars_df['Weight'])
maxi = np.max(cars_df['Weight'])
# print(mini)
# print(maxi)
step = int((maxi-mini)//4)
print(step)
cars_df['weightbinned'] = pd.cut(cars_df.Weight, bins=range(1695, 4105, step), retbins=False,include_lowest=True)
print(cars_df['weightbinned'])
cars_df = pd.get_dummies(cars_df,columns=["weightbinned"])
print(cars_df)
