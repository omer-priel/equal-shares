from contextlib import asynccontextmanager
from typing import AsyncIterator

from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from src.config import init_config
from src.logger import get_logger, init_loggers


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncIterator[None]:
    """Initialize and close the server"""

    init_config()
    init_loggers()

    get_logger().info("The server started.")

    yield None

    get_logger().info("The server closed.")


app = FastAPI(
    title="SoluTrain",
    description="SoluTrain API",
    lifespan=lifespan,
)


@app.get("/", include_in_schema=False)
def root() -> RedirectResponse:
    return RedirectResponse("/docs")


@app.get("/health-check")
@app.post("/health-check")
def health_check() -> dict:
    return {"status": "ok"}
