"""
=========================================================
Embedding API
=========================================================

Purpose:
- Generate embeddings for uploaded PDF chunks.
- Store embeddings inside ChromaDB.
- Triggered by Next.js backend after PDF upload.

Current:
- Placeholder API endpoint.

Future:
- Accept uploaded PDF/document_id.
- Load PDF text.
- Chunk document.
- Generate embeddings.
- Store in ChromaDB.
- Return indexing status.
=========================================================
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()


# --------------------------------------
# Request Schema
# --------------------------------------

class EmbeddingRequest(BaseModel):
    document_id: str


# --------------------------------------
# Response Schema
# --------------------------------------

class EmbeddingResponse(BaseModel):
    success: bool
    message: str


# --------------------------------------
# API Endpoint
# --------------------------------------

@router.post(
    "/",
    response_model=EmbeddingResponse
)
async def create_embedding(
    payload: EmbeddingRequest,
):
    try:
        """
        TODO (Later):
        ----------------------------
        1. Retrieve document path from MongoDB.
        2. Load PDF using pdf_loader.py.
        3. Clean extracted text.
        4. Split into chunks.
        5. Generate embeddings.
        6. Store vectors in ChromaDB.
        7. Update document status.
        """

        return EmbeddingResponse(
            success=True,
            message=(
                f"Embedding job started for "
                f"{payload.document_id}"
            ),
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )