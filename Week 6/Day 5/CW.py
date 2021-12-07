# from tabulate import tabulate

import psycopg2
def run_query(query):
    conn_string = "host='localhost' dbname='bootcamp' user= 'postgres' password='soulreaver0704'"
    connection = psycopg2.connect(conn_string)
    cursor = connection.cursor()
    cursor.execute(query)
    connection.commit()
    try:
        results = cursor.fetchall()
        connection.close()
        return results
    except:
        connection.close()
# def order():
#     choice = None
#     while choice != "X":
#         print("Moti's Fruit Shake Stand with questionable hygiene")
#         inv = get_inv()
#         print(tabulate(inv, headers=['Fruit', 'Amount']))
#         choice = input("What do you want to add to your shake?")
#         update_inv(choice)
#     else:
#         print("Bye")
# def update_inv(choice):
#     query = f"UPDATE fruit SET quantity=quantity-1 WHERE name = '{choice}';"
#     return run_query(query)
# # HOSTNAME = 'localhost'
# USERNAME = 'postgres'
# PASSWORD = 'soulreaver0704'
# DATABASE = 'Daily Challenge'

""" Creation of table in databases """
fruits = [('apple', 4),('lemon', 5)]
THERE’S NO GOOD REASON TO REPEAT YOURSELF IF YOU CAN CREATE A GENERAL FUNCTION
I.E run_query(query)
conn_string = "host='localhost' dbname='bootcamp' user='postgres' password='soulreaver0704'"
connection = psycopg2.connect(conn_string)
cursor = connection.cursor()
query = "CREATE TABLE fruit (name varchar (255), quantity int);"
cursor.execute(query)
query = f"INSERT INTO fruit (name, quantity) values {fruits[0]}, {fruits[1]};"
cursor.execute(query)
connection.commit()
connection.close()

""" Add/insert more fruit in specific table in database """
# conn_string = "host='localhost' dbname='bootcamp' user='postgres' password='soulreaver0704'"
# connection = psycopg2.connect(conn_string)
# cursor = connection.cursor()
# fruits = [('pear', 1),('letchi', 9)]
# query = f"INSERT INTO fruit (name, quantity) values {fruits[0]}, {fruits[1]};"
# cursor.execute(query)
# connection.commit()
# connection.close()
#
# inventory = get_inv()
# update_inv('apple')
# inventory = get_inv()

def add_fruit(invt, fruit):
    query = f"insert into fruit (name, quantity) values {fruit,invt}"
    return run_query(query)

add_fruit(5,'pineapple')
