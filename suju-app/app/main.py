from fastapi import FastAPI
from app.routers import chat

app = FastAPI(title="Chat Lookup API")
app.include_router(chat.router)

@app.get("/")
def root():
    return {"message": "Chat API is running"}