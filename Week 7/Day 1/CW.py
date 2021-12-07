# import numpy as np
# import pandas as pd

# df = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')
#
#
# instance = df.iloc[50]
# print(instance)
#
# print(df[['species','petal_length','petal_width']][50:61:2])
#
# print(df.groupby('species').apply(np.median))
# print(df.groupby('species').apply(np.sum))
#
#
#
# def math_operations(arr):
#     #* The minimum value in the array
#     min_val = arr.min()
#     print(min_val)
#     #* The standard deviation of the data
#     std_val = arr.std()
#     print(std_val)
#     #* The product of the elements in the array
#     sum_val = arr.sum()
#     print(sum_val)
#
#     #* Dot product of the array to itself
#     dot_product = arr.dot(arr)
#     print(dot_product)
#     #* An array with 4 subtracted from every element in the input array
#     arr_minus_four = arr - 4
#     print(arr_minus_four)
#     return min_val, std_val, sum_val, dot_product, arr_minus_four
#
# num = [2, 4, 6, 8, 13, 2020]
# numpy_arr = np.array(num)
# math_operations(numpy_arr)


# import numpy as np
# import matplotlib.pyplot as plt
#
# randnums = np.random.randint(0, 76, 100)
#
# fifty_by_two = randnums.reshape(50,2)
# # print(fifty_by_two)
#
#
# plt.scatter(fifty_by_two[:,0], fifty_by_two[:,1])
# plt.xlabel('num1')
# plt.ylabel('num2')
# plt.show(block=True)
#
# fig, ax=plt.subplots(1,2,figsize=(64, 64))
#
# ax[0].hist(fifty_by_two[:,0], color='g', label = 'num1')
# ax[1].hist( fifty_by_two[:,1], color='r', label = 'num2')
#
# ax[0].legend()
# ax[1].legend()
#
# ax[0].set_ylabel('Frequency')
# ax[1].set_ylabel('Frequency')
#
# ax[0].set_xlabel('num1')
# ax[1].set_xlabel('num2')
#
# plt.show(block=True)
# plt.interactive(False)
