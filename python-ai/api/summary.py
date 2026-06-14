"""
=========================================================
Summary API
=========================================================

Purpose:
- Generate AI summaries.
- Called from Next.js backend.

Current:
- Receives document_id.
- Calls summary_service.

Future:
- Retrieve document chunks.
- Build optimized prompt.
- Generate structured summary.
- Save summary to MongoDB.
- Save activity/history.
=========================================================
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from services.summary_service import (
    generate_summary,
)

router = APIRouter()


# --------------------------------------
# Request Schema
# --------------------------------------

class SummaryRequest(BaseModel):
    document_id: str


# --------------------------------------
# Response Schema
# --------------------------------------

class SummaryResponse(BaseModel):
    success: bool
    summary: str


# --------------------------------------
# API Endpoint
# --------------------------------------

@router.post(
    "/",
    response_model=SummaryResponse,
)
async def summary(
    payload: SummaryRequest,
):
    try:
        """
        TODO (Later):
        --------------------------
        1. Retrieve PDF chunks.
        2. Retrieve embeddings.
        3. Build context.
        4. Call Gemini.
        5. Store generated summary.
        """

        summary_text = (
            generate_summary(
                payload.document_id
            )
        )

        return SummaryResponse(
            success=True,
            summary=summary_text,
        )

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Summary generation failed: {str(e)}",
        )