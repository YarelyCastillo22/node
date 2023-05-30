-- creando la base de datos
CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;
CREATETABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);
SHOW TABLES;

describe customer;