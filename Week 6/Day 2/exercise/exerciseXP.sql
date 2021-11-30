-- Database: public

-- DROP DATABASE IF EXISTS public;

-- Exercise 1 : Items And Customers

select * from items order by item_price ASC 

select * from items where item_price > 80 order by item_price Desc

select customer_first_name,customer_last_name from customers order by customer_first_name ASC

select customer_last_name from customers order by customer_last_name Desc

CREATE TABLE purchases(
purchase_id SERIAL,
customer_id INTEGER,
item_id INTEGER,
PRIMARY KEY (purchase_id),
FOREIGN KEY (customer_id) REFERENCES customers (customer_id),
FOREIGN KEY (item_id) REFERENCES items (item_id)
);

-- insert into purchases(customer_id, item_id)
-- values (1,)

insert into purchases(customer_id,item_id)
values (4,1), (5,2);

insert into purchases(customer_id,item_id)
values (3,1), (2,2),(1,3)

select * from items
inner join purchases
on items.item_id = purchases.item_id

select customers.customer_id from customers
inner join purchases
on customers.customer_id = purchases.purchase_id

select item_id from purchases where customer_id =4

select customer_id from purchases where item_id = 1 or item_id = 2

insert into items (item_name , item_price) values ('Hard Disk',150);
insert into purchases(customer_id,item_id)
values (3,4);

select customers.customer_first_name from customers
inner join purchases on purchases.customer_id = customers.customer_id
inner join items on purchases.item_id = items.item_id

select customers.customer_last_name from customers
inner join purchases on purchases.customer_id = customers.customer_id
inner join items on purchases.item_id = items.item_id

select items.item_name from customers
inner join purchases on purchases.customer_id = customers.customer_id
inner join items on purchases.item_id = items.item_id

select customers.customer_first_name, customers.customer_last_name, items.item_name, items.item_price from customers
inner join purchases on purchases.customer_id = customers.customer_id
inner join items on purchases.item_id = items.item_id
