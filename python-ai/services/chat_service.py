"""
=========================================================
Chat Service
=========================================================

Purpose:
- Handle chat requests.
- Calls the RAG pipeline.

Current:
- Delegates work to rag_service.py.

TODO (Later):
- Chat history memory.
- Multi-document chat.
- Conversation summarization.
- Streaming responses.
=========================================================
"""

from services.rag_service import (
    run_rag_pipeline,
)


async def ask_question(
    document_id: str,
    question: str,
):
    """
    Process user question.
    """

    result = (
        await run_rag_pipeline(
            document_id=document_id,
            question=question,
        )
    )

    return result[
        "answer"
    ]