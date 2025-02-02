# Project Setup Guide

## Table of Contents
- [Backend Setup](#backend-setup)
  - [Without Docker](#without-docker)
  - [Using Docker](#using-docker)
- [Frontend Setup](#frontend-setup)
  - [Without Docker](#without-docker-1)
  - [Using Docker](#using-docker-1)

---

## Backend Setup

### Without Docker

#### 1. Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/) (if using a database)

#### 2. Install Dependencies
```sh
cd backend
npm install
```

#### 3. Create an Environment File
Create a `.env` file in the `backend` directory with the following content:
```env
PORT=5001
SECRET_KEY=your-secret-key
```

#### 4. Start the Server
```sh
npm start
```

The backend should now be running on `http://localhost:5001`.

---

### Using Docker

#### 1. Build the Docker Image
```sh
cd backend
docker build -t backend-app .
```

#### 2. Run the Container
```sh
docker run -d -p 5001:5001 --name backend-container backend-app
```

Check if the container is running:
```sh
docker ps
```

The backend should be accessible at `http://localhost:5001`.

---

## Frontend Setup

### Without Docker

#### 1. Prerequisites
- Install [Node.js](https://nodejs.org/)

#### 2. Install Dependencies
```sh
cd frontend
npm install
```

#### 3. Start the Frontend
```sh
npm run dev
```

The frontend should now be running on `http://localhost:5173` (or another available port).

---

### Using Docker

#### 1. Build the Docker Image
```sh
cd frontend
docker build -t frontend-app .
```

#### 2. Run the Container
```sh
docker run -d -p 5173:5173 --name frontend-container frontend-app
```

Check if the container is running:
```sh
docker ps
```

The frontend should be accessible at `http://localhost:5173`.

---

## Notes
- Make sure the **backend** is running before starting the frontend.
- If using **Docker**, ensure ports are correctly mapped.
- Update `.env` files as needed for production environments.

Happy coding! 🚀

