from fastapi import FastAPI
from api.health import router as health_router
from api.summary import router as summary_router
from api.chat import router as chat_router

app = FastAPI(
    title="AI PDF Backend",
    version="1.0.0"
)

app.include_router(
    health_router,
    prefix="/health",
    tags=["Health"]
)

app.include_router(
    summary_router,
    prefix="/summary",
    tags=["Summary"]
)

app.include_router(
    chat_router,
    prefix="/chat",
    tags=["Chat"]
)

@app.get("/")
def root():
    return {
        "status": "running",
        "service": "AI PDF Backend"
    }