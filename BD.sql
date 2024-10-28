CREATE DATABASE panaderia;
USE panaderia;
CREATE TABLE compras_pan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_pan VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    cantidad INT NOT NULL,
    total DECIMAL(10, 2) AS (precio * cantidad) STORED
);
SELECT * FROM compras_pan;
