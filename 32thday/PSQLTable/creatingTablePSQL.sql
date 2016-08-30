DROP TABLE actors;
CREATE TABLE actors (
    name VARCHAR(255) primary key,
    age smallint not null,
    oscars smallint not null
);

INSERT INTO actors (name, age, oscars) VALUES ('Leonardo DiCaprio', '41', '1');
INSERT INTO actors (name, age, oscars) VALUES ('Jennifer Lawrence', '25', '1');
INSERT INTO actors (name, age, oscars) VALUES ('Samuel L. Jackson', '67', '0');
INSERT INTO actors (name, age, oscars) VALUES ('LMeryl Streep', '66', '3');
INSERT INTO actors (name, age, oscars) VALUES ('John Cho', '43', '0');

SELECT * from actors;

SELECT * from actors where oscars > 1;
SELECT * from actors where age > 30;
