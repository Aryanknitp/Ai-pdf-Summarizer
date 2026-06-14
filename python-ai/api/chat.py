from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.chat_service import ask_question

router = APIRouter()


# -----------------------------
# Request Schema
# -----------------------------
class ChatRequest(BaseModel):
    document_id: str
    question: str


# -----------------------------
# Response Schema
# -----------------------------
class ChatResponse(BaseModel):
    success: bool
    answer: str


# -----------------------------
# Chat Endpoint
# -----------------------------
@router.post(
    "/",
    response_model=ChatResponse
)
async def chat(
    payload: ChatRequest
):
    try:
        answer = await ask_question(
            document_id=payload.document_id,
            question=payload.question,
        )

        return ChatResponse(
            success=True,
            answer=answer,
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Chat generation failed: {str(e)}",
        )