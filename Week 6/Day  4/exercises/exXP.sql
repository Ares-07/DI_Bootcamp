-- Database: hr.backup

-- DROP DATABASE IF EXISTS "hr.backup";

-- Basic Select Statement

select distinct first_name as First_Name, last_name as Last_Name from employees

select distinct employee_id from employees

select * from employees order by first_name desc

select distinct first_name, last_name, salary, salary*0.15 as PF from employees

select distinct employee_id, first_name, last_name, salary from employees order by salary asc

select sum(salary) from employees

select max(salary) from employees

select min(salary) from employees

select avg(salary) from employees

select distinct count (employee_id) from employees

select upper(first_name) from employees

SELECT SUBSTR(FIRST_NAME, 1 , 3 ) FROM EMPLOYEES; 

select CONCAT(first_name, ' ', last_name) as FullName from employees

select first_name, last_name, length(CONCAT(first_name, last_name)) from employees

select * from employees where first_name ~ '\d';

select * from employees limit 10


-- Restricting And Sorting

-- SELECT first_name, last_name, salary from employees where salary > 10000 and salary <15000

--  SELECT first_name, last_name, hire_date from employees where hire_date between '1987/01/01' and '1987/12/31'

-- SELECT first_name from employees where first_name ilike '%c%' and first_name ilike '%e%' 

-- SELECT employees.last_name,employees.salary,jobs.job_title
-- from employees
-- inner join jobs
-- on employees.job_id = jobs.job_id
-- where jobs.job_title not in ('Programmers', 'Shipping Clerks' )
-- and employees.salary not in(4500, 10000,15000) 

-- SELECT last_name from employees where last_name like '______'

-- SELECT last_name from employees where last_name like '__e%'

-- SELECT DISTINCT job_id  FROM employees;

-- SELECT * from employees where last_name ilike '%Jones%' or last_name ilike '%Blake%'
-- or last_name ilike '%King%'or last_name ilike '%Ford%'
