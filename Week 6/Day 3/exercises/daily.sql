-- Database: Daily Challenge

-- DROP DATABASE IF EXISTS "Daily Challenge";

CREATE TABLE customer(
customer_id SERIAL,
customer_name VARCHAR(50) NOT NULL,
PRIMARY KEY (customer_id)
);

CREATE TABLE customer_profile(
customer_profile_id INTEGER NOT NULL,
customer_character TEXT NOT NULL,
PRIMARY KEY (customer_profile_id),
CONSTRAINT fk_customer_id FOREIGN KEY (customer_profile_id) REFERENCES customer (customer_id)
);

INSERT INTO customer(customer_name) VALUES
('Oce'),
('Vars'),
('Sad'),
('Barbue'),
('Lisa');

INSERT INTO customer_profile(customer_profile_id, customer_character) VALUES
((SELECT customer_id FROM customer WHERE customer_name = 'Sad'), 'He is smart but sad .'),
((SELECT customer_id FROM customer WHERE customer_name = 'Oce'), 'She is talks too much but got nice teeth.');

SELECT customer.customer_name, customer_profile.customer_character as character
FROM customer
FULL JOIN customer_profile
ON customer.customer_id = customer_profile.customer_profile_id;

CREATE TABLE product (
item_id SERIAL,	
product_name VARCHAR(30) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO product(product_name) VALUES
('Nails'),
('Tensils'),
('Lamps'),
('Spoons'),
('Hammer'),
('Phone Case');

CREATE TABLE item_order (
customer_id INTEGER NOT NULL,
item_id INTEGER NOT NULL,
number_order INTEGER NOT NULL,
PRIMARY KEY (customer_id, item_id),
FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON UPDATE CASCADE,
FOREIGN KEY (item_id) REFERENCES product(item_id) ON UPDATE CASCADE
);

INSERT INTO item_order(customer_id, item_id, number_order) VALUES
((SELECT customer_id FROM customer  WHERE customer_name = 'Vars'), (SELECT item_id FROM product WHERE product_name = 'Nails'), 4),
((SELECT customer_id FROM customer  WHERE customer_name = 'Barbue'), (SELECT item_id FROM product WHERE product_name = 'Lamps'), 1),
((SELECT customer_id FROM customer  WHERE customer_name = 'Lisa'), (SELECT item_id FROM product WHERE product_name = 'Spoons'), 5);

select * from item_order

