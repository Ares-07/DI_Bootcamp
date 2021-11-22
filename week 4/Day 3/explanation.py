from datetime import datetime
“”"Taking input from user and converting it to datetime object”“”
birthday = input(‘What is your birthday? ex. DD/MM/YYYY’)
birthday_convert_to_date = datetime.strptime(birthday, “%d/%m/%Y”)
“”"Specifing the current date”“”
current_date = datetime.now()
“”"age”“”
age = int(current_date.year - birthday_convert_to_date.year)
age_to_string = str(age)
last_digit_age = int(age_to_string[-1])
candles = ‘i’ * last_digit_age
cake = f’‘'\n       ___{candles}___
      |:H:a:p:p:y:|
    __|___________|__
    |^^^^^^^^^^^^^^^^^|
    |:b:i:r:t:h:d:a:y:|
    |                 |
    ~~~~~~~~~~~~~~~~~~~‘’'
cake2 = f’‘'       ___{candles}___   \n      |:H:a:p:p:y:|   \n    __|___________|__   \n    |^^^^^^^^^^^^^^^^^|   \n    |:b:i:r:t:h:d:a:y:|   \n    |                 |    \n    ~~~~~~~~~~~~~~~~~~~‘’'
if birthday_convert_to_date.year % 4 == 0:
    print(cake * 2)
some_list = [1,2,3]
some_list[2]
some_list.append(4)
continents = {‘Asia’: [‘China’, ‘India’, ‘Russia’], ‘Europe’: [‘Germany’, ‘France’]}
continents[‘Asia’].append(‘Singapore’)
continents[‘America’] = [‘USA’, ‘Brazil’]
del continents[‘America’]
“”"Can’t have same names for keys, overwrites it”“”
continents[‘Asia’] = [‘Mongolia’]
print(‘Europe’ in continents.keys())
# Check if Germany inside the continets values
print(‘Germany’ in continents.values())
for key in continents.keys():
    print(key)
for value in continents.values():
    print(‘Germany’ in value)
americas = {‘Europe’: [‘Germany’, ‘France’, ‘Belgium’]}
continents.update(americas)
sample_dict = {
  “name”: “Kelly”,
  “age”:25,
  “salary”: 8000,
  “city”: “New york”
}
keys_to_remove = [“name”, “salary”]
for key in keys_to_remove:
    del sample_dict[key]
list_of_lists = [[1,2,3], [4,5,6], [7,8,9]]
new_dict = {}
for (index, val) in enumerate(list_of_lists):
    new_dict[index] = val
integer_list = [1,2,3,4]
updated_list = []
for num in integer_list:
    if num % 2 == 0:
        updated_list.append(num * 2)
    else:
        updated_list.append(num)
updated_list = [num ** 2 for num in list(range(0,10)) if num % 2 == 0]
dict_comprehension = {index : val for (index, val) in enumerate(list_of_lists)}
my_number = ‘1234’
my_list = []
my_list = [int(num) for num in my_number]
print(type(my_list[0]))
list_comprehension = [ITERATOR(STORED_VALUE) for ITERATOR in RANGE/LIST/STRING if CONDITION]
# check_type = continents.items()
# for key, value in continents.items():
#     print(key, value)
sample_dict = {
   “class”:{
      “student”:{
         “name”:“Mike”,
         “marks”:{
            “physics”:70,
            “history”:80
         }
      }
   }
}
sample_dict[‘class’][‘student’][‘marks’][‘history’] -= 10
