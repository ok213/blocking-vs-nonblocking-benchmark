-- DROP DATABASE IF EXISTS testreactive;
--
-- CREATE DATABASE testreactive
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.utf8'
--     LC_CTYPE = 'en_US.utf8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    "id" SERIAL PRIMARY KEY,
    "email" CHARACTER VARYING(100) UNIQUE NOT NULL,
    "password" CHARACTER VARYING(100) NOT NULL,
    "username" CHARACTER VARYING(100) NOT NULL,
    "is_active" BOOLEAN NOT NULL
);
