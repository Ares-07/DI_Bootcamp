-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- Exercise 1: DVD Rental

select * from language

select film.title,film.description,language.name from film
inner join language
on film.language_id = language.language_id

select film.title,film.description,language.name from film
left outer join language
on film.language_id = language.language_id

select film.title,film.description,language.name from film
right outer join language
on film.language_id = language.language_id

select film.title,film.description,language.name from film
full join language
on film.language_id = language.language_id

CREATE TABLE new_film(
new_film_id SERIAL,
new_film_title VARCHAR (50) NOT NULL,
PRIMARY KEY (new_film_id)
);

INSERT INTO new_film (new_film_title) VALUES
    ( 'Red Notice'),
    ( 'Venom: Let There Be Carnage'),
	( 'Shang-Chi and the Legend of the Ten Rings'),
    ( 'Eternals'),
	( 'Army of thieves'),
    ( 'Finch'),
	( 'Dune')
	;

create table customer_review (
	review_id serial not null,
	film_id integer not null,
	language_id integer,
	title varchar (100),
	score integer not null,
	check (score < 11 and score >= 0),
	review_text text,
	last_update timestamp default current_timestamp,
	primary key (review_id),
	foreign key (film_id) references new_film (new_film_id) on delete cascade,
	foreign key (language_id) references language (language_id)
);

insert into customer_review(film_id, language_id, title, score, review_text) values 
(1, 1, 'Red Notice', 10, 'well-directed with fantastic actors'),
(2, 1, 'Venom: Let There Be Carnage', 4, 'waste of time, do not watch this'),
(3, 2, 'Shang-Chi and the Legend of the Ten Rings', 8, 'well-directed with amazing CGI effects'),
(4, 3, 'Eternals', 5, 'Its okay');

insert into customer_review(film_id, language_id, title, score, review_text) values 
(6, 6, 'Finch', 1, 'Shitty Movie');

select * from customer_review

Delete from new_film where new_film_title = 'Finch'

Select * from new_film

Select * from customer_review


-- Exercise 2 : DVD Rental

UPDATE film
SET language_id = 2
WHERE film_id = 23 or film_id = 65
returning film

select title
from film
left join inventory
on film.film_id = inventory.film_id
where inventory.inventory_id is null

select count(rental_id) from rental where return_date is null

select rental.rental_id, film.title, film.rental_rate
from rental
inner join inventory
ON inventory.inventory_id = rental.inventory_id
inner join film
on film.film_id = inventory.film_id
WHERE rental.return_date is null
ORDER BY film.rental_rate desc limit 30

select title
from film
inner join film_actor
on film.film_id = film_actor.film_id
inner join actor
on actor.actor_id = film_actor.actor_id
where description ilike '%sumo%' and first_name='Penelope' and last_name='Monroe';

select title, length, rating
from film
where description ilike '%documentary%' and length < 60 and rating = 'R';

select film.title, rental.rental_id
from customer 
inner join rental on customer.customer_id = rental.customer_id
inner join film on film.film_id = customer.customer_id
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' and film.rental_rate >= 4.00 and rental.return_date < '2005-08-01' and rental.return_date >= '2005-07-28';

select distinct film.title,film.description,film.replacement_cost
from film 
join inventory on film.film_id = inventory.film_id 
join rental on inventory.inventory_id = rental.inventory_id 
join customer on rental.customer_id = customer.customer_id
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' and film.description ilike '%boat%' or film.title ilike '%boat%'
order by film.replacement_cost desc limit 1;
