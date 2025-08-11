import json
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

with open("data/data.json") as f:
    db = json.load(f)

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(req: ChatRequest):
    msg = req.message.lower()
    for name, info in db.items():
        if name in msg:
            return {"response": info["address"]}
    return {"response": "Sorry, I don't have that info."}