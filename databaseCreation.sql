DROP SCHEMA IF EXISTS dataStudents;
CREATE SCHEMA dataStudents;
USE dataStudents;

CREATE TABLE students(
	RA VARCHAR(20) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50),    
    CPF VARCHAR(11),
    CONSTRAINT PRIMARY KEY(RA)
);
