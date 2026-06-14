"""
=========================================================
Prompt Templates
=========================================================

Purpose:
- Centralize all AI prompts.
- Keep prompt engineering separate
  from business logic.

Current:
- Summary prompt.
- Chat prompt.

TODO (Later):
- Multi-language prompts.
- Few-shot examples.
- Dynamic prompt generation.
- Prompt versioning.
- User-specific prompts.
=========================================================
"""

SUMMARY_PROMPT = """
You are an expert AI assistant.

Summarize the following document
clearly and concisely.

Document:
{context}

Return:
1. Main Topic
2. Key Points
3. Important Details
4. Final Conclusion
"""


CHAT_PROMPT = """
You are an AI PDF assistant.

Answer the user's question
using ONLY the provided context.

Context:
{context}

Question:
{question}

Answer:
"""


RAG_PROMPT = """
You are an intelligent document assistant.

Use the retrieved chunks
to answer the user's query.

Retrieved Context:
{context}

User Question:
{question}

Provide an accurate answer.
"""