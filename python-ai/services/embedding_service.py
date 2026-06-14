"""
=========================================================
Embedding Service
=========================================================

Purpose:
- Generate vector embeddings.

Current:
- Uses embedding_model.py wrapper.

TODO (Later):
- Batch embedding generation.
- Async embedding generation.
- Cache embeddings.
- Background queue support.
=========================================================
"""

from models.embedding_model import (
    embeddings,
)


def create_embeddings(
    texts,
):
    """
    Generate embeddings
    for a list of text chunks.
    """

    return embeddings.embed_documents(
        texts
    )