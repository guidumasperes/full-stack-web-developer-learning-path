CREATE TABLE test (
    a INTEGER,
    b TEXT
);

INSERT INTO test VALUES (1, 'a');
INSERT INTO test VALUES (2, 'b');
INSERT INTO test VALUES (3, 'c');

SELECT * FROM test;

DROP TABLE test;

CREATE TABLE test (a INTEGER, b TEXT, c TEXT);

INSERT INTO test VALUES (1, 'This', 'Right Here!');

INSERT INTO test (b, c) VALUES ('This', 'Over There!');

INSERT INTO test DEFAULT VALUES;

INSERT INTO test SELECT id, name, description FROM item;

SELECT * FROM item;

DELETE FROM test WHERE a = 3;

DELETE FROM test WHERE a = 1;

SELECT * FROM test WHERE a IS NULL;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    a INTEGER NOT NULL,
    b TEXT NOT NULL,
    c TEXT
);

DROP TABLE IF EXISTS test;
CREATE TABLE test (
    a TEXT UNIQUE,
    b TEXT,
    c TEXT DEFAULT 'panda'
);
INSERT INTO test (a, b) VALUES ('one', 'two');
INSERT INTO test (a, b) VALUES ('un', 'deux');
SELECT * FROM test;

DROP TABLE IF EXISTS test;
CREATE TABLE test (a TEXT, b TEXT, c TEXT);
INSERT INTO test VALUES ('one', 'two', 'three');
INSERT INTO test VALUES ('two', 'three', 'four');
INSERT INTO test VALUES ('three', 'four', 'five');
SELECT * FROM test;

ALTER TABLE test ADD d TEXT;

ALTER TABLE test ADD e TEXT DEFAULT 'panda';

DROP TABLE IF EXISTS test;
CREATE TABLE test (
    id INTEGER PRIMARY KEY,
    a INTEGER,
    b TEXT
);
INSERT INTO test (a, b) VALUES (10, 'a');
INSERT INTO test (a, b) VALUES (11, 'b');
INSERT INTO test (a, b) VALUES (12, 'c');
SELECT * FROM test; 

SELECT Name, Continent, Population FROM Country WHERE Population < 100000 OR Population IS NULL ORDER BY Population DESC;

SELECT Name, Continent, Population FROM Country WHERE Name LIKE '%island%' ORDER BY Name;

SELECT * FROM Country WHERE Name LIKE '%Brazil%';

SELECT Name, Continent, Region, Population FROM Country WHERE Continent IN ('South America', 'North America') ORDER BY Continent;

SELECT * FROM Country;

SELECT DISTINCT Continent FROM Country;

SELECT DISTINCT Continent, Region FROM Country ORDER BY Continent;

-- Join
CREATE TABLE left ( id INTEGER, description TEXT );
CREATE TABLE right ( id INTEGER, description TEXT );

INSERT INTO left VALUES ( 1, 'left 01' );
INSERT INTO left VALUES ( 2, 'left 02' );
INSERT INTO left VALUES ( 3, 'left 03' );
INSERT INTO left VALUES ( 4, 'left 04' );
INSERT INTO left VALUES ( 5, 'left 05' );
INSERT INTO left VALUES ( 6, 'left 06' );
INSERT INTO left VALUES ( 7, 'left 07' );
INSERT INTO left VALUES ( 8, 'left 08' );
INSERT INTO left VALUES ( 9, 'left 09' );

INSERT INTO right VALUES ( 6, 'right 06' );
INSERT INTO right VALUES ( 7, 'right 07' );
INSERT INTO right VALUES ( 8, 'right 08' );
INSERT INTO right VALUES ( 9, 'right 09' );
INSERT INTO right VALUES ( 10, 'right 10' );
INSERT INTO right VALUES ( 11, 'right 11' );
INSERT INTO right VALUES ( 11, 'right 12' );
INSERT INTO right VALUES ( 11, 'right 13' );
INSERT INTO right VALUES ( 11, 'right 14' );

SELECT * FROM left;
SELECT * FROM right;

SELECT left.description, right.description FROM left JOIN right ON left.id = right.id;
SELECT left.description, right.description FROM left LEFT JOIN right ON left.id = right.id;

DROP TABLE IF EXISTS left;
DROP TABLE IF EXISTS right;

SELECT sale.id, sale.date, item.name, item.description, sale.price FROM sale JOIN item ON sale.item_id = item.id;

SELECT customer.name, customer.zip, item.name, item.description, sale.quantity, sale.price 
    FROM sale 
    JOIN item ON sale.item_id = item.id 
    JOIN customer ON sale.customer_id = customer.id 
    ORDER BY customer.name, item.name
;

-- Strings and it's functions
SELECT Name, LENGTH(Name) as Len FROM Country ORDER BY LENGTH(Name) DESC;

SELECT released, SUBSTR(released, 1, 4) AS Year, SUBSTR(released, 6, 2) AS Month, SUBSTR(released, 9, 2) AS Day FROM album ORDER BY released;

--Transactions
DROP TABLE widgetInventory;
DROP TABLE widgetSales;

CREATE TABLE widgetInventory (
  id INTEGER PRIMARY KEY,
  description TEXT,
  onhand INTEGER NOT NULL
);

CREATE TABLE widgetSales (
  id INTEGER PRIMARY KEY,
  inv_id INTEGER,
  quan INTEGER,
  price INTEGER
);

INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'rock', 25 );
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'paper', 25 );
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'scissors', 25 );

SELECT * FROM widgetInventory;
SELECT * FROM widgetSales;

BEGIN TRANSACTION;
INSERT INTO widgetSales ( inv_id, quan, price ) VALUES ( 1, 5, 500 );
UPDATE widgetInventory SET onhand = ( onhand - 5 ) WHERE id = 1;
END TRANSACTION;

BEGIN TRANSACTION;
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'toy', 25 );
ROLLBACK;
SELECT * FROM widgetInventory;