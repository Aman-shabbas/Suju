# Suju Project

A full-stack chat application with a FastAPI backend and React frontend.

## Project Structure

```
Suju/
├── suju-app/                 # FastAPI Backend
│   ├── app/                  # Application source code
│   │   ├── main.py          # FastAPI application entry point
│   │   ├── routers/         # API route definitions
│   │   ├── services/        # Business logic services
│   │   └── models/          # Data models
│   ├── data/                # Data files
│   ├── tests/               # Test files (pytest)
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile          # Docker configuration
├── suju-web-app/            # React Frontend
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   └── index.jsx        # Application entry point
│   ├── package.json         # Node.js dependencies
│   ├── jest.config.js       # Jest testing configuration
│   └── Dockerfile          # Docker configuration
└── docker-compose.yml       # Docker orchestration
```

## Prerequisites

- **Python 3.8+** (for backend)
- **Node.js 16+** (for frontend)
- **npm** or **yarn** (for frontend dependencies)
- **Git**

## Backend Setup (suju-app)

### 1. Navigate to the backend directory
```bash
cd suju-app
```

### 2. Create and activate virtual environment
```bash
# Create virtual environment
python3 -m venv .venv

# Activate virtual environment
# On macOS/Linux:
source .venv/bin/activate
# On Windows:
.venv\Scripts\activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the application
```bash
# Development mode with auto-reload
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Or using Python module
python -m uvicorn app.main:app --reload --port 8000
```

The backend will be available at: http://localhost:8000

### 5. API Documentation
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### 6. Available Endpoints
- `GET /` - Health check
- `POST /chat` - Chat endpoint (send message in JSON format)

## Frontend Setup (suju-web-app)

### 1. Navigate to the frontend directory
```bash
cd suju-web-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the application
```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The frontend will be available at: http://localhost:5173

## Running Both Applications

### Option 1: Separate Terminals
1. **Terminal 1** (Backend):
   ```bash
   cd suju-app
   source .venv/bin/activate
   uvicorn app.main:app --reload --port 8000
   ```

2. **Terminal 2** (Frontend):
   ```bash
   cd suju-web-app
   npm run dev
   ```

### Option 2: Using Docker Compose
```bash
# From the root directory
docker-compose up --build
```

## Testing

### Backend Testing (pytest)
```bash
cd suju-app
source .venv/bin/activate

# Run all tests
pytest

# Run tests with coverage
pytest --cov=app

# Run tests in watch mode
pytest --watch
```

### Frontend Testing (Jest)
```bash
cd suju-web-app

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Development

### Backend Development
- The FastAPI application is located in `suju-app/app/`
- Add new routes in `suju-app/app/routers/`
- Add business logic in `suju-app/app/services/`
- Add data models in `suju-app/app/models/`

### Frontend Development
- React components are in `suju-web-app/src/components/`
- Add new components in the components directory
- Update routing in `suju-web-app/src/App.jsx`

## Data

The application uses a simple JSON file for data storage:
- Location: `suju-app/data/data.json`
- Format: JSON with name-address mappings
- Example:
  ```json
  {
    "aman": { "address": "123 Green Street, Bangalore" },
    "sara": { "address": "42 Maple Avenue, Mumbai" }
  }
  ```

## Troubleshooting

### Common Issues

1. **Port already in use**:
   - Kill existing processes: `pkill -f uvicorn` or `pkill -f vite`
   - Use different ports: `--port 8001` for backend, `--port 3000` for frontend

2. **Import errors**:
   - Ensure virtual environment is activated
   - Check Python path and module structure

3. **Dependencies not found**:
   - Reinstall requirements: `pip install -r requirements.txt`
   - Clear npm cache: `npm cache clean --force`

### Logs
- Backend logs appear in the terminal running uvicorn
- Frontend logs appear in the terminal running npm and in browser console

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

[Add your license information here]
