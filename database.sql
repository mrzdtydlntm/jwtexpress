CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE jwttutorial;

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL UNIQUE,
    user_password TEXT NOT NULL
);

SELECT * FROM users;

--psql -U postgres -d jwttutorial
--\dt
--heroku pg:psql
