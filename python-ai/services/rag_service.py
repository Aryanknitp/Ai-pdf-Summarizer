

# from services.vector_store import (
#     similarity_search,
# )
# from models.gemini_model import (
#     generate_response,
# )


# async def run_rag_pipeline(
#     document_id: str,
#     question: str,
# ):
#     """
#     1. Search relevant chunks.
#     2. Build context.
#     3. Ask Gemini.
#     """

#     documents = similarity_search(
#         document_id=document_id,
#         query=question,
#         top_k=4,
#     )

#     context = "\n\n".join(
#         [
#             doc["content"]
#             for doc in documents
#         ]
#     )

#     prompt = f"""
# You are an AI PDF assistant.

# Answer the user's question
# only using the provided context.

# Context:
# {context}

# Question:
# {question}

# Answer:
# """

#     answer = generate_response(
#         prompt
#     )

#     return {
#         "answer": answer,
#         "sources": documents,
#     }








"""
=========================================================
RAG Service
=========================================================

Purpose:
- Retrieval Augmented Generation pipeline.

Current:
1. Retrieve chunks.
2. Build prompt.
3. Query LLM.

TODO (Later):
- LangGraph workflow.
- Citation generation.
- Source highlighting.
- Memory support.
=========================================================
"""

from services.retrieval_service import (
    retrieve_context,
)

from models.llm import llm


async def run_rag_pipeline(
    document_id: str,
    question: str,
):
    """
    Main RAG pipeline.
    """

    docs = retrieve_context(
        query=question,
        top_k=4,
    )

    context = "\n\n".join(
        [
            doc.page_content
            for doc in docs
        ]
    )

    prompt = f"""
Answer the question
using only the provided context.

Context:
{context}

Question:
{question}

Answer:
"""

    answer = llm.generate(
        prompt=prompt,
        temperature=0.3,
    )

    return {
        "answer": answer,
        "sources": docs,
    }