use employeedb;
CREATE TABLE employee (
 id int(11) NOT NULL AUTO_INCREMENT primary key,
 name varchar(255) default null,
 salary int(11) default null,

 createdAt DATETIME DEFAULT NOW()
) engine=InnoDB auto_increment=0 default
charset=utf8mb4 collate=utf8mb4_0900_ai_ci;

drop table employee;

insert into employee(name,salary) 
values ('vishal','250000'),
('dipesh','250000'),
('rohan','100000'),
('arun','150000');

select * from employee;

