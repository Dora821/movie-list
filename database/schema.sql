DROP DATABASE IF EXISTS movie;
CREATE DATABASE movie;
USE movie;

CREATE TABLE Movies (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (255) NOT NULL,
  description TEXT,
  year  DATE,
  score FLOAT,
  PRIMARY KEY (id)
);

INSERT INTO Movies (name, description, year, score) VALUES ("The Big Short", "Movie", "1995-01-01", "4.8");
INSERT INTO Movies (name, description, year, score) VALUES ("Mean Girls", "Movie", "1995-01-01", "4.8");
INSERT INTO Movies (name, description, year, score) VALUES ("Hackers", "Movie", "1995-01-01", "4.8");
INSERT INTO Movies (name, description, year, score) VALUES ("The Grey", "Movie", "1995-01-01", "4.8");
INSERT INTO Movies (name, description, year, score) VALUES ("Ex Machina", "Movie", "1995-01-01", "4.8");