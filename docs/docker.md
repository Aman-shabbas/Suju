# Docker documentation

[🏠 Home](Home) | [📖 Users' Guide](Users-Guide) | [🛠 Developers' Guide](Developers'-Guide) | [📚 Tools & Services](Tools-and-Services) | [📓 Project Roadmap](Project-Roadmap)

This document explains the role of **Docker** in this project, how it is set up, and details of the configuration file. 

### 1. What is Docker?
--- 
Docker is a platform that allows applications to be packaged with all their dependencies into containers.
Containers ensure that the application runs the same way across different environments (development, testing, production), removing the “it works on my machine” problem.


### 2. Why are we using Docker in this project?
---
In this chat app project, Docker ensures:
- **Consistency**: Same environment for all developers and servers.  
- **Simplicity**: Run the app with a single command, no need to manually install Node.js or dependencies.  
- **Scalability**: Easy to deploy and scale in production.  
- **Isolation**: Keeps the project dependencies separate from your host system.  

---

### 3. How Docker is used in this project
---
- A **Dockerfile** is created to define how to build the chat app image.  
- The app can be containerized and run with:
  ```bash
  docker build -t Suju .
  docker run -p 3000:3000 Suju

- Optionally, docker-compose.yml can be used if we run multiple services (frontend, backend, database) together.

### 4.a. Running each app individually
---
- **Backend (FastAPI: suju-app/)**
    ```
    cd suju-app // Navigate to backend folder
    docker build -t suju-backend // build backend image
    docker run -p 8000:8000 suju-backend // Run backend container 
    ```

- **Frontend (React: suju-web-app)**
    ```
    cd suju-web-app // Navigate to frontend folder
    docker build -t suju-frontend // Build frontend image
    docker run -p 3000:5173 suju-frontend // Run frontend container( this app running on port 5173)
    ```

### 4.b. Run with docker compose
---

- Since you have docker-compose.yml at the root level, you can build & start everything (backend + frontend + database if any) with just:

```
docker-compose up --build
```

- --build → ensures images are rebuilt if there are changes.
- Without --build, you can just run:

```
docker-compose up
```

▶️ This will start all the services together(Frontend + backend)

If your docker-compose.yml maps ports like:

- `backend: 8000` → available at http://localhost:8000
- `frontend: 5173`→ available at http://localhost:5173

### 5. Stopping and Cleaning up
---

```
 docker-compose down //Stop all running containers
 docker stop <container_id> //Stop only specific container (if running individually)
 docker system prune -f //Remove unused containers/images
```

## 🧠 Understanding docker files

- ### Backend
```
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```
- 📖 Explanation of backend docker file
    - `FROM python:3.11-slim`
        - Sets the base image to Python 3.11 slim version (a lightweight Debian-based image).
        - Provides Python runtime environment needed for FastAPI.
        - Using slim keeps the image small and efficient.

    - `WORKDIR /app`
        - Sets the working directory inside the container to /app.
        - All subsequent commands (COPY, RUN, CMD) will execute relative to this folder.

    - `COPY requirements.txt`
        - Copies the requirements.txt file from your local project into the container’s /app directory.
        - Done before copying all files so that Docker can cache dependency installation (faster rebuilds).

    - `RUN pip install --no-cache-dir -r requirements.txt`
        - Installs all Python dependencies listed in requirements.txt.
        - --no-cache-dir prevents pip from caching downloaded packages, reducing image size.

    - `COPY . .`
        - Copies the rest of your project files (backend source code, configs, etc.) into /app.
        - At this point, your FastAPI app code is available inside the container.

    - `EXPOSE 8000`
        - Informs Docker that the application will listen on port 8000.
        - This doesn’t publish the port automatically but documents it for when you run the container with -p.

    - `CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`
        - Defines the command to run when the container starts.
        - uvicorn runs your FastAPI app.
        - app.main:app → Refers to app/main.py where the FastAPI instance is named app.
        - --host 0.0.0.0 → Makes the server accessible externally, not just inside the container.
        - --port 8000 → Runs the app on port 8000.
    
    - So when you build and run this docker file.
        ```
        docker build -t suju-backend .
        docker run -p 8000:8000 suju-backend
        ```
        - ➡️ Your FastAPI backend will be available at: **http://localhost:8000**

- ### Frontend
```
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
```
- 📖 Explanation of frontend docker file
    - `FROM node:18-alpine`
        - Uses Node.js version 18 with the Alpine Linux base image.
        - alpine is a minimal Linux distribution → keeps the image small and fast.
        - Provides the runtime environment required for building and running the React app.

    - `WORKDIR /app`
        - Sets /app as the working directory inside the container.
        - All following commands (COPY, RUN, CMD) will run in this folder.

    - `COPY package*.json ./`
        - Copies package.json and package-lock.json into the container.
        - This step is done before copying all files so that dependency installation can be cached.
        - If code changes but dependencies don’t, Docker can skip reinstalling.

    - `RUN npm install`
        - Installs all Node.js dependencies defined in package.json
        - Dependencies are installed inside the container, not on your host machine.

    - `COPY . .`
        - Copies the entire frontend source code (React components, Vite config, etc.) into the container’s /app directory.

    - `EXPOSE 5173`
        - Informs Docker that the application listens on port 5173.
        - This is Vite’s default dev server port.
        - Note: this does not automatically publish the port, you need -p 5173:5173 when running the container.

    - `CMD ["npm", "run", "dev", "--", "--host"]`
        - Defines the default command that runs when the container starts.
        - npm run dev → starts the Vite development server.
        - -- --host → makes the dev server listen on all network interfaces (0.0.0.0), so it’s accessible outside the container.
    - Running the frontend container 
        ```
        docker build -t suju-frontend .
        docker run -p 5173:5173 suju-frontend
        ```
        - ➡️ Frontend will be available at: **http://localhost:5173**

- ### Docker-compose.yml 
```
version: "3"
services:
  backend:
    build: ./suju-app
    ports:
      - "8000:8000"
  frontend:
    build: ./suju-web-app
    ports:
      - "3000:5173"
    depends_on:
      - backend
```

- 📖 Explanation of each section
- `version: "3"`
    - Specifies the Docker Compose file format version.
    - Version 3 is widely supported and works well with modern Docker engines.

- `services:`
    - Defines the containers (services) that make up the application.
    - In this project → backend (FastAPI) and frontend (React + Vite).
- Backend service
    - 
    ```
    backend:
    build: ./suju-app
    ports:
        - "8000:8000"
    ```
    - `build: ./suju-app` → Tells Docker Compose to build an image using the Dockerfile inside the `suju-app` directory.
    - `ports: "8000:8000"` → Maps container port `8000` to host port `8000`.
    - ➡️ Backend available at **http://localhost:8000**
- Frontend service
    - 
    ```
    frontend:
    build: ./suju-web-app
    ports:
        - "3000:5173"
    depends_on:
        - backend
    ```

    - `build: ./suju-web-app` → Builds the frontend image using the Dockerfile in `suju-web-app`.
    - `ports: "3000:5173"` → Maps container port `5173` (Vite dev server) to host port `3000`.
    - ➡️ Frontend available at **http://localhost:3000**
    - depends_on: `- backend` → Ensures the backend service starts before the frontend.