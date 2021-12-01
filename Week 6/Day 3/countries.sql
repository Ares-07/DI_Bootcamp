-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

CREATE TABLE countries(
country_id SERIAL,
country_name VARCHAR (50) NOT NULL,
PRIMARY KEY (country_id)
)

INSERT INTO countries (country_name)
VALUES('England'),('France');


SELECT actors.first_name, actors.last_name, countries.country_id,countries.country_name
FROM actors
INNER JOIN countries
ON actors.actor_id=countries.country_id

SELECT actors.first_name, actors.last_name, countries.country_id,countries.country_name
FROM actors
left JOIN countries
ON actors.actor_id=countries.country_id

SELECT actors.first_name, actors.last_name, countries.country_id,countries.country_name
FROM actors
right JOIN countries
ON actors.actor_id=countries.country_id

SELECT actors.first_name, actors.last_name, countries.country_id,countries.country_name
FROM actors
full JOIN countries
ON actors.actor_id=countries.country_id