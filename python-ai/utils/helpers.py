"""
=========================================================
General Helper Functions
=========================================================

Purpose:
- Shared utility functions.
- Formatting and conversions.

TODO (Later):
- Timezone helpers.
- JSON serialization.
- UUID utilities.
- Date formatting helpers.
=========================================================
"""

from datetime import (
    datetime,
)


def current_timestamp():
    """
    Return UTC timestamp.
    """

    return (
        datetime.utcnow()
        .isoformat()
    )


def success_response(
    data=None,
    message="Success",
):
    """
    Standard API success response.
    """

    return {
        "success": True,
        "message": message,
        "data": data,
        "timestamp": current_timestamp(),
    }


def error_response(
    message="Error",
):
    """
    Standard API error response.
    """

    return {
        "success": False,
        "message": message,
        "timestamp": current_timestamp(),
    }