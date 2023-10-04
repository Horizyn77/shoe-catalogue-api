CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    colour VARCHAR (255) NOT NULL,
    size INT NOT NULL,
    price INT NOT NULL,
    in_stock INT NOT NULL,
    img_src VARCHAR(255) NOT NUll
)