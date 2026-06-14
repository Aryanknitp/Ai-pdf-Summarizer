"""
=========================================================
File Utilities
=========================================================

Purpose:
- Validate uploaded files.
- Create directories if needed.
- Generate safe filenames.

Current:
- PDF validation.
- File extension extraction.
- Directory creation.

TODO (Later):
- Validate MIME type.
- Scan for malicious files.
- Generate UUID-based filenames.
- Support S3/Cloudinary storage.
- Add file size validation.
=========================================================
"""

import os
import uuid

ALLOWED_EXTENSIONS = {
    ".pdf",
}


def allowed_file(
    filename: str,
):
    """
    Check whether file extension
    is allowed.
    """

    ext = os.path.splitext(
        filename
    )[1].lower()

    return ext in ALLOWED_EXTENSIONS


def get_extension(
    filename: str,
):
    """
    Return file extension.
    """

    return os.path.splitext(
        filename
    )[1].lower()


def generate_filename(
    original_name: str,
):
    """
    Generate a unique filename.

    TODO (Later):
    - Preserve user folder structure.
    - Add timestamp.
    - Add hashing.
    """

    extension = get_extension(
        original_name
    )

    return (
        str(uuid.uuid4())
        + extension
    )


def ensure_directory(
    path: str,
):
    """
    Create directory if missing.
    """

    os.makedirs(
        path,
        exist_ok=True,
    )