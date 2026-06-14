"""
=========================================================
PDF Loader Service
=========================================================

Purpose:
- Load PDF documents from disk.
- Extract raw text/documents.

Current:
- Uses LangChain PyPDFLoader.

TODO (Later):
- Support scanned PDFs (OCR).
- Support DOCX, TXT, Markdown.
- Validate corrupted PDFs.
- Add file size limits.
- Add page-wise metadata extraction.
=========================================================
"""

from langchain_community.document_loaders import PyPDFLoader


def load_pdf(
    file_path: str,
):
    """
    Load PDF and return LangChain Document objects.
    """

    try:
        loader = PyPDFLoader(
            file_path
        )

        documents = loader.load()

        return documents

    except Exception as error:
        print(
            "[PDF Loader Error]",
            str(error),
        )

        return []