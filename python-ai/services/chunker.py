"""
=========================================================
Chunking Service
=========================================================

Purpose:
- Split long documents into smaller chunks.
- Improve retrieval accuracy.

Current:
- Uses RecursiveCharacterTextSplitter.

TODO (Later):
- Dynamic chunk size.
- Semantic chunking.
- Metadata-aware chunking.
- Page number preservation.
=========================================================
"""

from langchain.text_splitter import (
    RecursiveCharacterTextSplitter,
)

splitter = (
    RecursiveCharacterTextSplitter(
        chunk_size=1000,
        chunk_overlap=200,
    )
)


def split_documents(
    documents,
):
    """
    Split LangChain documents into chunks.
    """

    return splitter.split_documents(
        documents
    )