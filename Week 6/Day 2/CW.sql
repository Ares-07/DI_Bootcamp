-- DATABASE CONCEPTS Ex.

SELECT avg(number_oscars) AS average_number_oscars FROM actors;

SELECT DISTINCT first_name,number_oscars FROM actors

SELECT * FROM actors WHERE age > date('1/01/1970')

SELECT * FROM actors WHERE first_name IN ('David','Morgan','Will')


update actors SET first_name='maty' WHERE first_name='Matt' AND last_name='Damon';
select * from actors

update actors SET number_oscars = 4 WHERE first_name = 'George' AND last_name = 'Clooney';
select * from actors

ALTER TABLE actors rename COLUMN age TO birthdate;
select * from actors

DELETE FROM actors WHERE first_name = 'Helena'
select * from actors