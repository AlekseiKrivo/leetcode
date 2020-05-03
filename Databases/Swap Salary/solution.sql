-- Write your MySQL query statement below

-- I use the MySQL if() function to solve this task.
update salary set sex = if(sex = 'f', 'm', 'f');