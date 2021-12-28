import pg from "pg";
import dotenv from "dotenv";
const {Pool} = pg;
dotenv.config();

let localPoolConfig = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
}

const poolConfig = process.env.DATABASE_URL ? {
    connectionString:process.env.DATABASE_URL,
    ssl:{rejectUnauthorized:false}
} : localPoolConfig;

const pool = new Pool(poolConfig);
export default pool;