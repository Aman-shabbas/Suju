import pytest
from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture
def client():
    """Test client fixture for FastAPI app"""
    return TestClient(app)

@pytest.fixture
def test_app():
    """Test app fixture"""
    return app
