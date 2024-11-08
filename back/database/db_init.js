import { pool } from "../database/db_connection.js";

async function createTables() {
    try {
        await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            created_at TIMESTAMPTZ DEFAULT NOW()
        );
        `);
    } 
    catch (error) {
        console.log("error : database creation failed");
        throw error;
    }
}

export default {
    createTables
};