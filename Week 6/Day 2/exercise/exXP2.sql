-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- select * from customer

-- select first_name,last_name from customer

-- select distinct create_date from customer

-- select * from customer order by first_name desc

-- select film_id,title,description,release_year,rental_rate from film order by rental_rate asc

-- select address,phone from address where district = 'Texas'

-- select * from film where film_id = 15 or film_id = 150

-- select film_id,title,description,length,rental_rate from film where title = 'Sea Virgin'

-- select film_id,title,description,length,rental_rate from film where title ilike 'Se%'

-- select film_id,title,rental_rate from film order by rental_rate asc limit 10

-- select film_id,title,rental_rate from film order by rental_rate asc offset 10 limit 10

SELECT customer.customer_id,customer.first_name,customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON payment.customer_id = customer.customer_id order by customer_id;

select film_id,title from film where film_id not in (select film_id from inventory)

select city.city, country.country_id, country.country 
from city 
inner join country 
on country.country_id = city.country_id;

select customer.first_name, customer.last_name, payment.customer_id, payment.amount, payment.payment_date, payment.staff_id 
from customer 
inner join payment 
on payment.customer_id = customer.customer_id order by payment.staff_id;
