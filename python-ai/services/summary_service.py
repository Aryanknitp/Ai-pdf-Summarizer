"""
=========================================================
Summary Service
=========================================================

Purpose:
- Generate AI summaries.

Current:
- Sends prompt to LLM.

TODO (Later):
- Use RAG context.
- Generate structured summaries.
- Save summary to database.
- Support multiple summary lengths.
=========================================================
"""

from models.llm import llm


def generate_summary(
    context: str,
):
    prompt = f"""
You are an AI assistant.

Summarize the following document.

Document:
{context}

Provide:
1. Main Ideas
2. Key Points
3. Final Conclusion
"""

    return llm.generate(
        prompt=prompt,
        temperature=0.2,
    )