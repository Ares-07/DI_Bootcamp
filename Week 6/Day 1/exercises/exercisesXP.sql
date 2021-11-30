-- Exercise 1 : Items And Customers
-- CREATE TABLE items(
--  item_id SERIAL PRIMARY KEY,
--  item_name VARCHAR (50) NOT NULL,
--  item_price SMALLINT NOT NULL
-- )

-- CREATE TABLE customers(
-- customer_id SERIAL PRIMARY KEY,
-- customer_first_name VARCHAR (50) NOT NULL,
-- customer_last_name VARCHAR (50) NOT NULL
-- )


-- insert into items(item_name, item_price) values
-- ('Small Desk' ,100),('Large Desk' ,100),('Fan' ,80)

 insert into customers(customer_first_name,customer_last_name) values
('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'), ('Trevor','Green'), ('Melanie','Johnson')

SELECT * FROM items
SELECT * FROM items WHERE item_price > 80
SELECT * FROM items WHERE item_price < 300
SELECT * FROM customers where customer_last_name ilike '%smith%'
SELECT * FROM customers where customer_last_name ilike '%jones%'
SELECT * FROM customers where customer_last_name not ilike '%scott%'


