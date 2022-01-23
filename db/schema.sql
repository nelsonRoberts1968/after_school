USE clubhubdb;
DROP TABLE IF  EXISTS signup;
DROP TABLE IF EXISTS users;


CREATE TABLE signup(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30)NOT NULL,
    lastname VARCHAR(30)NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR (100) NOT NULL,
    city VARCHAR(30) NOT NULL,
    state VARCHAR (30) NOT NULL,
    zipcode INTEGER,
    username VARCHAR(30) NOT NULL,
    password VARCHAR (255) NOT NULL
);

CREATE TABLE users(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50)NOT NULL,
    password VARCHAR(255)
);
