CREATE DATABASE IF NOT EXISTS bamazon;

USE bamazon;

CREATE TABLE products (
	id INT(8) NOT NULL AUTO_INCREMENT,
    product_name varchar(255) NOT NULL,
    department_name varchar(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
	("Nintendo 2DSXL", "entertainment", 149.99, 55),
    ("Shark ION RV750", "cleaning", 222.99, 39),
    ("Samsung UHD TV", "entertainment", 249.99, 51),
    ("Canon DSLR Camera", "cameras", 399.99, 46),
    ("Microsoft XBox One", "entertainment", 355.95, 32),
    ("Ryze Tello Quadcopter", "drones", 129.99, 28),
    ("Ninja Table Top Blender", "kitchenware", 85.99, 54),
    ("Crusinart Toaster", "kitchenware", 49.99, 42),
    ("Dell Touch Laptop", "computers", 469.99, 25),
    ("Skullcandy WiFi Headphones", "audio", 105.99, 36);