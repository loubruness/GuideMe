import express, { json } from 'express';
const app = express();
const port = 3000;

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
