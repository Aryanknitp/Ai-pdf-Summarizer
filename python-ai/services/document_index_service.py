"""
=========================================================
Document Index Service
=========================================================

Purpose:
- Complete indexing pipeline.

Flow:
PDF
 ↓
Load PDF
 ↓
Clean Text
 ↓
Chunk Text
 ↓
Generate Embeddings
 ↓
Store in ChromaDB

TODO (Later):
- Background queue.
- Progress tracking.
- Retry failed indexing.
=========================================================
"""

from services.pdf_loader import (
    load_pdf,
)
from services.chunker import (
    split_documents,
)
from services.vector_store import (
    add_documents,
)


def index_document(
    file_path: str,
):
    """
    Complete indexing workflow.
    """

    docs = load_pdf(
        file_path
    )

    chunks = split_documents(
        docs
    )

    add_documents(
        chunks
    )

    return {
        "success": True,
        "chunks": len(
            chunks
        ),
    }