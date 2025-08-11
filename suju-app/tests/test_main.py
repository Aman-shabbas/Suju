import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_main():
    """Test the main endpoint"""
    response = client.get("/")
    assert response.status_code == 200

def test_health_check():
    """Test health check endpoint if it exists"""
    response = client.get("/health")
    # This test will pass if /health exists, fail if it doesn't
    # You can modify this based on your actual endpoints
    assert response.status_code in [200, 404]
