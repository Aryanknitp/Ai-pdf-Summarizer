from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    GEMINI_API_KEY: str
    CHROMA_DB_PATH: str = "./vector_db/chroma_db"
    UPLOAD_PATH: str = "./uploads/originals"
    MODEL_NAME: str = "gemini-2.5-flash"

    class Config:
        env_file = ".env"


settings = Settings()