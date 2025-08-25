import json
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

with open("data/data.json") as f:
    db = json.load(f)

class ChatRequest(BaseModel):
    message: str


predefined_responses = {
        "hello": "Hi there! How can I help you?",
        "hi": "Hi there! How can I help you?",
        "hallo": "Hi there! How can I help you?",
        "hey": "Hi there! How can I help you?",
        "bye": "Goodbye! Have a great day!",
        "thanks": "You're welcome!",
        "help": "Sure, let me know what you need help with."
    }

@router.post("/chat")
def chat(req: ChatRequest):
    msg = req.message.lower()
    for name, info in db.items():
        if name in msg:
            return {"response": info["address"]}
        
    for word in msg.split(" "):
        if word in predefined_responses:
            return {"response": predefined_responses[word]}
    return {"response": "Sorry, I don't have that info."} 