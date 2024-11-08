import express, { json } from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;
const app = express();
const port = 3000;

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: 10425,
    database: "defaultdb",
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.CERTIFICATE,
    },
};
const client = new pg.Client(config);

client.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

// Middleware pour interpréter les requêtes en JSON
app.use(json());

// Définir une route de base (GET)
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur REST !');
});

// Exemple de route POST
app.post('/data', (req, res) => {
    const data = req.body;
    res.json({
        message: "Données reçues avec succès",
        data: data
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur REST démarré sur http://localhost:${port}`);
});
