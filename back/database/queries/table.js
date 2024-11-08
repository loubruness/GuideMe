import { pool } from '../db_connection.js';

async function GetAllTables() {
    try {
        const query = await pool.query('SELECT * FROM information_schema.tables WHERE table_schema = $1', ['public']);
        return query.rows;
    }
    catch {return null}
}

export default {
    GetAllTables
};