from fastapi import FastAPI
from app.routers import chat
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Chat Lookup API")

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"] 
)

app.include_router(chat.router)

@app.get("/")
def root():
    return {"message": "Chat API is running"}