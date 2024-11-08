import { pool } from '../db_connection.js';

async function checkExistsUser(email) {
    try {
        const query = await pool.query('SELECT count(*) FROM app_user WHERE mail = $1', [email]);
        return query.rows[0]?.count > 0;
    }
    catch {return false}
}

async function getUserByEmail(email) {
    try {
        const query = await pool.query('SELECT * FROM app_user WHERE mail = $1', [email]);
        return query.rows[0] ?? null;
    }
    catch {return null}
}

async function getUserById(id) {
    try {
    const query = await pool.query('SELECT * FROM app_user WHERE id = $1', [id]);
    return query.rows[0] ?? null;
    }
    catch {return null}
}

async function createUser(email, password, username) {
    try {
        const query = await pool.query('INSERT INTO app_user (mail, hashed_password, username) VALUES ($1, $2, $3) RETURNING id', [email, password, username]);
        console.log(query);
        return query.rows[0]?.id ?? null;        
    }
    catch {return null}
}

async function deleteUser(id) {
    try {
        await pool.query('DELETE FROM app_user WHERE id = $1', [id]);
        return id;
    }
    catch {return null}
}

export {
    checkExistsUser,
    getUserByEmail,
    getUserById,
    createUser,
    deleteUser
}