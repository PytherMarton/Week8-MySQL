--  - Return a table of all of the tech leads

-- SELECT * FROM master32.current_job_detail
-- WHERE job_title IN('Tech Lead');



--  - Return a table of all of the female employees

-- SELECT * FROM  master32.employee_detail
-- WHERE  gender IN('F');



--  - Return a table of all the employees that name starts with an S

-- SELECT * FROM master32.employee_detail 
-- WHERE Name LIKE 'S%';



--  - Return a table of all the employees that have ever been a developer

-- SELECT * FROM master32.jobs_history
-- WHERE job_title LIKE ('%Developer%');

 
 
--  - Return a table of all the laptop ids that run Ubuntu as an OS

-- SELECT * FROM master32.laptop_detail
-- WHERE os = 'Ubuntu';



--  - Return a table of all the employees whose name starts with A or S

-- SELECT * FROM master32.employee_detail
-- WHERE Name LIKE ('A%') OR Name LIKE ('S%');



-- CREATE TABLE master32.my_fav_employees (
-- 	employee_id INT PRIMARY KEY,
-- 	job_title VARCHAR(64)
-- );

-- INSERT INTO master32.my_fav_employees
-- 	SELECT employee_id, job_title FROM master32.current_job_detail
-- 	WHERE employee_id IN (1001, 1002);
-- 
-- INSERT INTO master32.my_fav_employees (employee_id, job_title)
-- VALUES (1003, "Developer");
-- 
-- DELETE FROM  master32.my_fav_employees WHERE employee_id = 1003;

-- DROP TABLE master32.my_fav_employees;

-- SELECT * FROM master32.current_job_detail cjd 
-- INNER JOIN master32.employee_detail ed 
-- ON cjd.employee_id = ed.Employee_ID;

-- SELECT job_title, SUM(salary)
-- FROM master32.current_job_detail
-- GROUP BY job_title; 

-- SELECT count(Employee_ID) AS myCount FROM master32.employee_detail ed 
-- WHERE gender = "F";

-- SELECT job_title, COUNT(*) AS job_count
-- FROM master32.current_job_detail cjd 
-- GROUP BY job_title; 



-- - Return a table linking laptop_detail and current_job_detail

-- SELECT * FROM master32.laptop_detail ld
-- INNER JOIN master32.current_job_detail cjd; 



-- - Return a table of only the employees that own a Mac

-- SELECT * FROM master32.laptop_detail ld 
-- WHERE os = 'Mac';



-- - Return a table of all the employees that were an apprentice
-- developer but are now a developer


--SELECT * FROM current_job_detail cjd
--INNER JOIN jobs_history jh
--ON cjd.eployee_id = jh.employee_id
--WHERE jh.job_title = "Apprentice Developer" AND cjd.job title = "Developer";
--SELECT * FROM jobs_history jh
--INNER JOIN jobs_history jh2
--INNER JOIN employee_detail ed
--ON jh.employee_id = jh2.employee_id
--AND jh.Employee_ID = ed. Employee_ID
--WHERE jh.job_title = "Apprentice Developer" AND jh2.job_title = "Developer";



--- Return a table of all the employees that weren’t a developer and
--now are

--SELECT * FROM current_job_detail cjd
--INNER JOIN jobs_history jh
--ON cjd.employee_id = jh.employee_id
--WHERE jh.job_title NOT LIKE ("%Developer") AND cjd.job_title LIKE ("%Developer");



--- Return a table of all the employees that have had more then one job
--title (not using aggregates) 

--SELECT * FROM current_job_detail cjd
--INNER JOIN jobs_history jh
--ON cjd.employee.id = jh.employee_id
--WHERE jh.job_title != cjd.job_title;




--- Look in your table, you may have duplicates. Remove them.

--SELECT DISTINCT cjd.employee_id, cjd.job_title FROM master32.current_job_detail cjd
--INNER JOIN master32.jobs_history jh
--ON cjd._employee_id = jh.employee_id
--WHERE jh.job_title != cjd.job_title;




--- Return a table of the max salary by job TYPE

--SELECT job_title, MAX(salary) FROM current_job_detail cjd
--GROUP BY job_title;


--
--- Return a table counting how many people have each OS

--SELECT job_title, os, COUNT(os) FROM current_job_detail cjd
--INNER JOIN laptop_detail ld
--ON cjd.laptop_id = ld.laptop_id
--GROUP BY job_title, os;



--- Return a table of the average salary of staff members that have at
--some point been an apprentice developer

--SELECT cjd.job_title, AVG(salary) FROM current_job_detail cjd
--INNER JOIN jobs_history jh
--ON cjd.employee_id = jh.employee_id
--WHERE jh.job_title = "Apprentice Developer"
--GROUP BY job_title;



--- Return a row of data containing the name of the person with the
--highest salary (don’t just eyeball the table and select an employee id)

--SELECT name
--FROM employee_detail ed
--INNER JOIN current_job_detail cjd
--ON cjd.employee_id = ed.Employee_ID
--ORDER BY cjd.salary DESC
--LIMIT 1;



--- Do the same for the highest salary by job type


































































