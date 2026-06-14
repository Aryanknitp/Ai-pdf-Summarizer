"""
=========================================================
LLM Wrapper
=========================================================

Purpose:
- Abstract Large Language Models.
- Prevent tight coupling with Gemini/OpenAI.
- All services should call this file.

Current:
- Uses Gemini through gemini_model.py.

Future:
- Support multiple LLMs.
- Add model fallback.
- Add response caching.
- Add streaming support.
- Add token usage tracking.
=========================================================
"""

from models.gemini_model import (
    generate_response,
)


class LLM:
    """
    Generic LLM wrapper.
    """

    def __init__(
        self,
        provider="gemini",
    ):
        self.provider = provider

    def generate(
        self,
        prompt: str,
        temperature: float = 0.3,
        max_output_tokens: int = 2048,
    ):
        """
        Generate text using selected provider.
        """

        if self.provider == "gemini":
            return generate_response(
                prompt=prompt,
                temperature=temperature,
                max_output_tokens=max_output_tokens,
            )

        raise ValueError(
            f"Unsupported provider: {self.provider}"
        )


# --------------------------------------
# Singleton Instance
# --------------------------------------

llm = LLM()