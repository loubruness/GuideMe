import pg from 'pg'
const { Pool } = pg

import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.POSTGRES_CA,
    }
})

export {
  pool
}