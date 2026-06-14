"""
=========================================================
Health Check API
=========================================================

Purpose:
- Verify Python AI server is alive.
- Used by Next.js backend.
- Used by Docker/Kubernetes health probes.

Current:
- Returns server status.

Future:
- Check Gemini API connectivity.
- Check ChromaDB availability.
- Check embedding model loaded.
- Check upload folder access.
=========================================================
"""

from fastapi import APIRouter
from datetime import datetime

router = APIRouter()


@router.get("/")
async def health():
    """
    Basic health endpoint.
    """

    return {
        "success": True,
        "status": "healthy",
        "service": "Python AI Backend",
        "version": "1.0.0",
        "timestamp": datetime.utcnow().isoformat(),
    }


@router.get("/detailed")
async def detailed_health():
    """
    TODO (Later):
    -----------------------
    Check:
    - Gemini API
    - ChromaDB
    - Embedding Model
    - Upload Folder
    - Available Memory
    - GPU Status (optional)
    """

    return {
        "success": True,
        "services": {
            "python_server": "OK",
            "gemini": "Not Checked",
            "vector_db": "Not Checked",
            "embedding_model": "Not Checked",
        },
    }