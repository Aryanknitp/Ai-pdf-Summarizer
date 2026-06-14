"""
=========================================================
Text Cleaner Service
=========================================================

Purpose:
- Clean extracted PDF text.

Current:
- Removes extra spaces.

TODO (Later):
- Remove headers/footers.
- Remove page numbers.
- Remove duplicate lines.
- Normalize Unicode.
- Remove unwanted symbols.
=========================================================
"""


def clean_text(
    text: str,
):
    """
    Basic text cleaning.
    """

    if not text:
        return ""

    cleaned = (
        text.replace(
            "\n",
            " ",
        )
        .replace(
            "\t",
            " ",
        )
        .strip()
    )

    return " ".join(
        cleaned.split()
    )