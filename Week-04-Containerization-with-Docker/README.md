# Week 04 – Containerization with Docker

## 📌 Project Overview

This project demonstrates how to containerize a simple Node.js and Express application using Docker.

The application is packaged into a Docker image and run inside a Docker container using Docker port mapping.

## 🛠️ Technologies Used

- Node.js
- Express.js
- Docker

## 📁 Project Structure

```text
Week-04-Containerization-with-Docker/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## 🐳 Docker Commands

### Build the Docker Image

```bash
docker build -t devops-week4-app .
```

### Run the Docker Container

```bash
docker run -d -p 8081:3000 --name devops-week4-container devops-week4-app
```

### Check Running Containers

```bash
docker ps
```

### View Application Logs

```bash
docker logs devops-week4-container
```

## 🌐 Access the Application

Open the application in your browser:

```text
http://localhost:8081
```

## 🔌 Port Mapping

```text
8081:3000
```

- **8081** – Host machine port
- **3000** – Application port inside the Docker container

## 🎯 Learning Outcomes

- Created a Dockerfile for a Node.js application
- Built a Docker image
- Ran the application inside a Docker container
- Used Docker port mapping
- Used `.dockerignore` to exclude unnecessary files from the Docker build context