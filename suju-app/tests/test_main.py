import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

class TestMainApplication:
    """Test cases for the main application"""
    
    def test_read_main(self):
        """Test the main endpoint"""
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"message": "Chat API is running"}
    
    def test_main_endpoint_response_format(self):
        """Test that main endpoint returns proper JSON format"""
        response = client.get("/")
        data = response.json()
        assert "message" in data
        assert isinstance(data["message"], str)
        assert "Chat API is running" in data["message"]
    
    def test_main_endpoint_headers(self):
        """Test that main endpoint returns proper headers"""
        response = client.get("/")
        assert response.headers["content-type"] == "application/json"
    
    def test_health_check_endpoint_not_exists(self):
        """Test health check endpoint doesn't exist (should return 404)"""
        response = client.get("/health")
        assert response.status_code == 404
    
    def test_invalid_endpoint_returns_404(self):
        """Test that invalid endpoints return 404"""
        response = client.get("/invalid-endpoint")
        assert response.status_code == 404
    
    def test_post_to_main_endpoint_not_allowed(self):
        """Test that POST to main endpoint is not allowed"""
        response = client.post("/", json={"test": "data"})
        assert response.status_code == 405  # Method Not Allowed
    
    def test_put_to_main_endpoint_not_allowed(self):
        """Test that PUT to main endpoint is not allowed"""
        response = client.put("/", json={"test": "data"})
        assert response.status_code == 405  # Method Not Allowed
    
    def test_delete_to_main_endpoint_not_allowed(self):
        """Test that DELETE to main endpoint is not allowed"""
        response = client.delete("/")
        assert response.status_code == 405  # Method Not Allowed

class TestApplicationStructure:
    """Test cases for application structure and configuration"""
    
    def test_app_title(self):
        """Test that the app has the correct title"""
        assert app.title == "Chat Lookup API"
    
    def test_app_has_chat_router(self):
        """Test that the app includes the chat router"""
        # Check if chat endpoint is accessible
        response = client.post("/chat", json={"message": "test"})
        assert response.status_code != 404  # Endpoint exists
    
    def test_app_has_openapi_docs(self):
        """Test that OpenAPI documentation is available"""
        response = client.get("/docs")
        assert response.status_code == 200
    
    def test_app_has_redoc(self):
        """Test that ReDoc documentation is available"""
        response = client.get("/redoc")
        assert response.status_code == 200
