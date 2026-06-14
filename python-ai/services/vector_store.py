"""
=========================================================
Vector Store Service
=========================================================

Purpose:
- Store embeddings.
- Retrieve similar chunks.

Current:
- Uses ChromaDB.

TODO (Later):
- Metadata filtering.
- Hybrid search.
- Delete/update vectors.
- Multiple collections.
=========================================================
"""

from langchain_chroma import (
    Chroma,
)

from models.embedding_model import (
    embeddings,
)

from config import settings

vector_store = Chroma(
    persist_directory=settings.CHROMA_DB_PATH,
    embedding_function=embeddings,
)


def add_documents(
    documents,
):
    """
    Store document chunks.
    """

    vector_store.add_documents(
        documents
    )


def similarity_search(
    query: str,
    top_k: int = 4,
):
    """
    Retrieve relevant chunks.
    """

    return (
        vector_store.similarity_search(
            query=query,
            k=top_k,
        )
    )