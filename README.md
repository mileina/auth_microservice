# Micro‑service d'authentification & API Gateway

Cet exercice vous fournit deux services Node.js :
* **auth-service** – micro‑service Express + MongoDB pour l'enregistrement et la connexion
* **gateway** – passerelle HTTP centralisant les appels vers `auth-service`

## Structure

```
auth-service/
  package.json
  .env.sample
  server.js
  routes/
    auth.js
  models/
    User.js

gateway/
  package.json
  .env.sample
  server.js
```

## Lancer en local

```bash
# 1. Cloner ou décompresser l'archive
cd auth-service
cp .env.sample .env        # puis ajuster si besoin
npm install
npm run dev                # démarre sur http://localhost:5000

# 2. Dans un autre terminal
cd gateway
cp .env.sample .env
npm install
npm run dev                # passerelle sur http://localhost:8000
```

## Points à compléter

* Gestion d'erreurs plus fine et validation des champs
* Refresh‑tokens et blacklist des JWT révoqués
* Protection des routes avec middleware `authenticate`
* Docker : ajouter un `docker-compose.yml`
* Tests unitaires (Jest/ Supertest)
* Sécuriser les en‑têtes (helmet), limiter le rate‑limiting…
