-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE TABLE students(
--  student_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  birth_date DATE NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)VALUES
-- ('Marc','Benichou','02/11/1998'),
-- ('Yoan','Cohen','03/12/2010'),
-- ('Lea','Benichou','27/07/1987'),
-- ('Amelia','Dux','07/04/1996'),
-- ('David','Grez','14/06/2003'),
-- ('Omer','Simpson','03/10/1980')

-- INSERT INTO students (first_name, last_name, birth_date)VALUES
-- ('Advait','Bisram','07/04/1998')

SELECT * FROM students 
SELECT first_name, Last_name FROM students
SELECT first_name, Last_name FROM students where student_id = 2
SELECT first_name, Last_name FROM students where first_name ilike '%Marc%' and last_name ilike '%Benichou%'
SELECT first_name, Last_name FROM students where first_name ilike '%Marc%' or last_name ilike '%Benichou%'
SELECT first_name FROM students where first_name ilike '%a%' 
SELECT first_name FROM students where first_name ilike 'a%'
SELECT first_name FROM students where first_name ilike '%a'
SELECT first_name FROM students where first_name ilike '%a%' offset 2
SELECT * FROM students where student_id = 1 or student_id = 3
SELECT * FROM students where birth_date >= '1/01/2000'

