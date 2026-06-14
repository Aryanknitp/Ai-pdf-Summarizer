"""
=========================================================
Logger Utility
=========================================================

Purpose:
- Centralized logging.
- Debug AI pipeline.

Current:
- Console logging.

TODO (Later):
- Python logging module.
- Rotating log files.
- Separate error logs.
- Sentry integration.
- Grafana/Loki integration.
=========================================================
"""

from datetime import (
    datetime,
)


def log_info(
    message: str,
):
    print(
        f"[INFO] "
        f"{datetime.utcnow()} "
        f"{message}"
    )


def log_warning(
    message: str,
):
    print(
        f"[WARNING] "
        f"{datetime.utcnow()} "
        f"{message}"
    )


def log_error(
    message: str,
):
    print(
        f"[ERROR] "
        f"{datetime.utcnow()} "
        f"{message}"
    )