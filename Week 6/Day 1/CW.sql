-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- Ex1
-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Anna','Hathaway','08/12/1980', 1);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Helena','Carter','21/07/1983', 2);

-- insert into actors(first_name, last_name, age, number_oscars) values
-- ('Johnny','Depp' ,'21/05/1973',6),('Leonardo','DiCaprio','21/05/1979',1),('Tom','Hanks','21/05/1979',3)


-- SELECT * FROM actors;

-- Ex2

-- SELECT * FROM actors LIMIT 4;

-- SELECT * FROM actors order by last_name DESC limit 4

-- SELECT * FROM actors where first_name ilike '%E%'

-- SELECT * FROM actors WHERE number_oscars >= 5

SELECT COUNT(actor_id) FROM actors

INSERT INTO actors (first_name, last_name, age)
VALUES('Anna','Hathaway','08/12/1980');
ERROR:  null value in column "number_oscars" of relation "actors" violates not-null constraint