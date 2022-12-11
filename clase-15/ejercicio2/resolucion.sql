create database mibase;
use mibase;
create table usuario(id INT unsigned not null auto_increment, nombre VARCHAR(50) not null, apellido VARCHAR(50) not null,
edad int unsigned not null, email VARCHAR(50) not null, primary key (id));
insert into usuario(nombre, apellido, edad, email) VALUES ("Rodrigo","Vergara",21,"rodrigovergara2001@gmail.com"),
("Lucia","Cardoso",25,"lulii@gmail.com"),("Carla","Adison",23,"carla@gmail.com");
SELECT * FROM usuario;
DELETE FROM usuario WHERE id = 2;
SELECT * FROM usuario;
UPDATE usuario SET edad = 24 WHERE id = 1;
SELECT * FROM usuario;