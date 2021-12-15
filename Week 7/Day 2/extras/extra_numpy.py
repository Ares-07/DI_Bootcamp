""" Numpy Part 1 - Basic """
# 1
import numpy as np

# 2
# print (np.__version__)

# # 3
# vectors = np.zeros(10)
# print (vectors)

# # 4
# memory_size = vectors.size * vectors.itemsize
# print(memory_size)

# # 5
# # print(np.info(np.add))

# # 6
# vectors[4] = 1
# print (vectors)

# # 7
# vector_range = np.arange(10,49)
# print (vector_range)

# # 8
# vector_reverse = vector_range[::-1]
# print (vector_reverse)

# # 9
# matrix = np.arange(0,9).reshape(3,3)
# print (matrix)

# # 10
# arr1 = np.array([1,2,0,0,4,0])
# non_zero = arr1[np.nonzero(arr1)]
# print(non_zero)

# # 11
# identity_matrix = np.eye(3,dtype=int)
# print (identity_matrix)

# # 12
# random_matrix = np.random.randint(1, 10, (2, 3, 4))
# print (random_matrix)

# # 13
# ten_by_ten = np.random.rand(10,10)
# # print (ten_by_ten)
# print(ten_by_ten.min())
# print(ten_by_ten.max())

# # 14
# vector30 = np.arange(30)
# print(vector30.mean())

# # 15
# matrix_2d = np.ones((5,5))
# matrix_2d[1:-1,1:-1] = 0
# print(matrix_2d)

# # 16
# matrix2d_add = np.pad(matrix_2d,pad_width=1, constant_values=0)
# print(matrix2d_add)

# # 17
# # print(0 * np.nan) #nan
# # print(np.nan == np.nan) #false
# # print(np.inf > np.nan) #false
# # print(np.nan - np.nan) #nan
# # print(0.3 == 3 * 0.1) #false

# # 18
# matrix_diag = np.diag([1,2,3,4,7])
# print(matrix_diag)

# # 19
# checkers = np.zeros((8,8),dtype=int)
# checkers[1::2,::2] = 1
# checkers[::2,1::2] = 1
# print(checkers)

# # 20
# print (np.unravel_index(100, (6,7,8)))

# 21
# checkers_tile= np.array([[0,1], [1,0]])
# checkers_tile= np.tile(checkers_tile,(4,4))
# print (checkers_tile)

# # 22
# matrix_norm = np.random.random((5,5))
# maxA, minB = matrix_norm.max(), matrix_norm.min()
# matrix_norm= (matrix_norm-minB)/(maxA-minB)
# print (matrix_norm)

# # 23
#
# # # 24
# real_matrix = np.dot(np.ones((5,3)), np.ones((3,2)))
# print (real_matrix)

# # 25
# matrix_1d = np.arange(11)
# matrix_1d[(3 < matrix_1d) & (matrix_1d <= 8)] *= -1
# print(matrix_1d)

# 26
# print(sum(range(5),-1)) #9
# print(sum(range(5),-1)) #9

# 27 ???
# print(Z**Z)
# print(Z <- Z)
# print(1j*Z)

# # 28
# print(np.array(0) / np.array(0)) #nan
# print(np.array(0) // np.array(0)) #0

# # 29
# vector_ceil = np.random.rand(10)
# print(np.copysign(vector_ceil, -1))
# print(np.ceil(vector_ceil))

# 30
# print(np.intersect1d([1, 3, 4, 3], [3, 1, 2, 1]))

# 31
# old_settings = np.seterr(all='ignore')
# np.seterr(over='raise')
# print(old_settings)
# np.seterr(**old_settings)

# 32
# print(np.sqrt(-1) == np.emath.sqrt(-1)) #false

# 33
# yesterday = np.datetime64('today', 'D') - np.timedelta64(1, 'D')
# print("Yestraday: ",yesterday)
# today     = np.datetime64('today', 'D')
# print("Today: ",today)
# tomorrow  = np.datetime64('today', 'D') + np.timedelta64(1, 'D')
# print("Tomorrow: ",tomorrow)

# 34
# august = np.arange('2016-08', '2016-09', dtype='datetime64[D]')
# print(august)

# 35
# A = np.ones(3)*1
# B = np.ones(3)*2
# C = np.ones(3)*3
# print(np.add(A,B,out=B))
# print(np.divide(A,2,out=A))
# print(np.negative(A,out=A))
# print(np.multiply(A,B,out=A))

# 36
# extract_5 = np.random.uniform(0,10,10)
# print(extract_5)
# print (extract_5 - extract_5%1)
# print (np.floor(extract_5))
# print (np.ceil(extract_5)-1)
# print (extract_5.astype(int))
# print (np.trunc(extract_5))

# 37
# matrix_row = np.zeros((5,5))
# matrix_row += np.arange(5)
# print(matrix_row)

# 39
# vector_10 = np.linspace(0,1,12,endpoint=True)[1:-1]
# print(vector_10)

# 40
# vector_sort = np.random.random(10)
# vector_sort.sort()
# print(vector_sort)
