-- Drop database if exists
drop database if exists burgers_db;

--Create database
create database burgers_db;

--Use database
use burgers_db;

create table burgers (
    id int auto_increment not null,
    burger_name varchar(255) not null,
    devoured boolean not null,
    primary key(id)
)
