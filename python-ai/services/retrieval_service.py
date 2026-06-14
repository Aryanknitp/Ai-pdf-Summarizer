"""
=========================================================
Retrieval Service
=========================================================

Purpose:
- Retrieve relevant chunks for RAG.

Current:
- Calls vector store.

TODO (Later):
- Add reranking.
- Add hybrid retrieval.
- Add document filters.
=========================================================
"""

from services.vector_store import (
    similarity_search,
)


def retrieve_context(
    query: str,
    top_k: int = 4,
):
    """
    Retrieve relevant context.
    """

    docs = similarity_search(
        query=query,
        top_k=top_k,
    )

    return docs