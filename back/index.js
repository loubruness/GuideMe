import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Test Connection to the database, Remove this code after testing
import { pool } from "./database/db_connection.js";
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Erreur de connexion à la base de données', err.stack)
    } else {
        console.log('Connecté à la base de données le', res.rows[0].now)
    }
    }
)

const app = express();
const port = process.env.APP_PORT ?? 3000;

// Middleware pour interpréter les requêtes en JSON
app.use(json());
app.use(express.urlencoded({ extended: true }));

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur REST démarré sur http://localhost:${port}`);
});

// Définir une route de base (GET)
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur REST !');
});

import authRoutes from './routes/auth.js';
app.use('/auth', authRoutes);

//import othersRoutes from './routes/others.js';
//app.use('/others', securityMiddleware.verifyToken, require('./routes/others'));