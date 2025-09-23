API pour la gestion de films avec Node.js, Express et MongoDB. Permet de gérer les utilisateurs, les films et l’association des films aux utilisateurs.

🛠 Technologies utilisées

Node.js

Express.js

MongoDB avec Mongoose

JWT pour l’authentification

bcrypt pour le hash des mots de passe

Cors pour la communication frontend/backend

🚀 Fonctionnalités
1. Gestion des utilisateurs

Créer un utilisateur

Se connecter et recevoir un JWT

Modifier, supprimer et récupérer les informations d’un utilisateur (routes protégées)

Logout (côté client, en supprimant le token)

2. Gestion des films

Créer un film (utilisateur connecté)

Récupérer tous les films (catalogue global)

Récupérer un film par son ID

Validation des champs : titre obligatoire, année de sortie entre 1800 et l’année en cours, image valide (.jpg, .png, etc.)

3. Association utilisateur/film

Chaque utilisateur peut ajouter des films à sa propre collection (User_Film)

Un film peut être ajouté par plusieurs utilisateurs sans duplication dans le catalogue global

Les utilisateurs ne peuvent voir que leurs propres films

🔐 Authentification

JWT token nécessaire pour accéder aux routes protégées

Token à mettre dans l’header :

Authorization: Bearer <TOKEN>

🗂 Structure du projet
project/
│
├─ controllers/
│   ├─ filmController.js
│   ├─ userController.js
│   └─ userFilmController.js
│
├─ models/
│   ├─ Film.js
│   ├─ User.js
│   └─ User_Film.js
│
├─ routes/
│   ├─ filmRoutes.js
│   ├─ userRoutes.js
│   └─ userFilmRoutes.js
│
├─ middlewares/
│   └─ verifyToken.js
│
├─ index.js
├─ package.json
└─ .env

📦 Installation

Cloner le projet :

git clone <ton-repo-github>
cd <nom-du-dossier>


Installer les dépendances :

npm install


Créer un fichier .env à la racine avec :

MONGO_URI=<ton-URI-MongoDB>
JWT_SECRET=<clé-secrète-pour-jwt>
JWT_EXPIRES_IN=1d
PORT=3000


Lancer le serveur en développement :

npm run dev


Le serveur sera disponible sur :

http://localhost:3000

📄 Routes principales
Users
Méthode	Route	Description	Auth
POST	/api/users	Créer un utilisateur	Non
POST	/api/users/login	Login et récupération JWT	Non
GET	/api/users	Récupérer tous les utilisateurs	Oui
GET	/api/users/:id	Récupérer un utilisateur par id	Oui
PATCH	/api/users/:id	Mettre à jour un utilisateur	Oui
DELETE	/api/users/:id	Supprimer un utilisateur	Oui
Films
Méthode	Route	Description	Auth
GET	/api/films	Récupérer tous les films	Oui
GET	/api/films/:id	Récupérer un film par ID	Oui
POST	/api/films	Ajouter un film	Oui
User-Film (films ajoutés par l’utilisateur)
Méthode	Route	Description	Auth
GET	/api/user-films	Récupérer les films de l’utilisateur	Oui
POST	/api/user-films/add	Ajouter un film à l’utilisateur	Oui
⚠️ Validation

title, director, releaseYear, pictures, categorie sont obligatoires

rating doit être entre 0 et 10

releaseYear entre 1800 et l’année en cours

pictures doit être une URL valide ou un nom de fichier image (.jpg, .png, etc.)

💡 Notes

Les utilisateurs ne voient que leurs films ajoutés

Un même film peut être ajouté par plusieurs utilisateurs sans duplication dans le catalogue global

Utilisation de User_Film pour gérer les relations user/film

📬 Exemples Postman
1. Login
POST /api/users/login
Body:
{
  "email": "user@example.com",
  "password": "password123"
}


Réponse :

{
  "loginUser": { "_id": "...", "email": "user@example.com" },
  "token": "eyJhbGciOiJI..."
}

2. Récupérer ses films
GET /api/user-films
Headers: Authorization: Bearer <TOKEN>


Réponse :

{
  "films": [
    {
      "_id": "...",
      "user": "...",
      "film": {
        "_id": "...",
        "title": "Tenet",
        "releaseYear": 2020
      }
    }
  ]
}

3. Ajouter un film
POST /api/user-films/add
Headers: Authorization: Bearer <TOKEN>
Body:
{
  "filmId": "<ID du film>"
}