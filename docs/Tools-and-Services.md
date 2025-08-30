# 📚 Tools & Services  

[🏠 Home](Home) | [📖 Users' Guide](Users-Guide) | [🛠 Developers' Guide](Developers'-Guide) | [📚 Tools & Services](Tools-and-Services) | [📓 Project Roadmap](Project-Roadmap)  

This section documents the **tools, libraries, and services** used in this project.  
Each tool is described with:  
- 🔹 What it is  
- 🔹 Why it is used  
- 🔹 How it is used in this project  

---

## ⚡ Build Tools  

### [Vite](https://vitejs.dev/)  
- **What it is:** A next-generation frontend build tool and development server.  
- **Why we use it:** Provides fast startup time, Hot Module Replacement (HMR), and optimized builds for modern frameworks.  
- **How it’s used here:**  
   - Manages frontend assets and bundling.  
   - Runs a dev server for rapid UI development.  
   - 👉 Setup & usage: [Vite Setup](vite)  

### [Docker](https://www.docker.com/)
- **What it is:** A containerization platform that packages applications and their dependencies into lightweight, portable containers.  
- **Why we use it:** Ensures consistent environments, simplifies setup, and makes deployment and scaling easier.  
- **How it’s used here:**  
   - Runs the FastAPI backend and React frontend in isolated containers.  
   - Uses `docker-compose` to orchestrate and run multiple services together.
   - - 👉 Setup & usage: [docker](docker)  

### [Pytest](https://docs.pytest.org/en/stable/)

- **What it is:** A testing framework for Python that makes it easy to write simple unit tests as well as complex functional and integration tests.  
- **Why we use it:**  
   - Provides a clean and readable syntax (`assert` statements instead of boilerplate).  
   - Automatically discovers test files and test functions.  
   - Supports fixtures for managing test setup/teardown.  
   - Easily extended with plugins and markers (e.g., for slow or integration tests).  
- **How it’s used here:**  
   - All details of how the `pytest` is used here is [documented here](pytest)

---

## 🤖 Machine Learning Frameworks  

📌 *Placeholder* — framework details will be added once the LLM pipeline is integrated.  

Examples (to decide later):  
- **PyTorch** → Flexible deep learning library  
- **TensorFlow** → End-to-end ML platform  
- **Custom LLM Implementation** → Minimal dependency approach  

---

## 🌐 Backend & APIs  

📌 *Placeholder* — add details about backend stack. Examples:  
- Node.js / Express → API server for chatbot requests  
- Python (FastAPI / Flask) → Model inference service  

---

## 🚀 Deployment Tools  

📌 *Placeholder* — tools planned for deployment. Possible candidates:  
- **Docker** → Containerize app for consistency  
- **Kubernetes** → Orchestration for scaling  
- **Cloud Provider** → AWS / GCP / Azure for hosting  

---

## 📊 Monitoring & Logging  

📌 *Placeholder* — planned monitoring solutions. Examples:  
- Grafana & Prometheus → Metrics dashboard  
- ELK Stack → Centralized logs  
- Sentry → Error tracking  

---

## 🔄 CI/CD & Automation  

📌 *Placeholder* — tools for continuous integration and delivery. Examples:  
- GitHub Actions → Automated builds & tests  
- Jenkins → Alternative CI tool  
- Prettier + ESLint → Code formatting & linting  

---

## 🧰 Other Utilities  

📌 *Placeholder* — misc tools and services as they are added. Examples:  
- Postman → API testing  
- Husky → Git hooks for pre-commit checks  
- pnpm / yarn → Alternative package managers  

---

## 🔗 Related Pages  

- [Home](Home)  
- [Users' Guide](Users-Guide)  
- [Developers' Guide](Developers-Guide)  
- [Project Roadmap](Project-Roadmap)  
