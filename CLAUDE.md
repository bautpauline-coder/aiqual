# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AIQual is a Geneva-based AI automation startup. The repository contains:
- n8n workflow automation configurations (JSON workflows in `n8n/bot sources/`)
- Docker infrastructure for PostgreSQL + n8n (`docker/postgres/`)
- Documentation in French (`Markdown/`)
- Domain/infrastructure config (`config/domains.md`)

## Infrastructure Setup

Start the full stack (PostgreSQL 16 + n8n):

```bash
cd docker/postgres
cp .env.example .env
# Edit .env with real credentials
docker-compose up -d
```

Services after startup:
- n8n UI: http://localhost:5678
- PostgreSQL: localhost:5432
- Production n8n: https://n8n.aiqual.ai (DNS → 84.227.116.51, Infomaniak/Sunrise)

## Python Development

The Python project follows standard conventions per `Markdown/CONTRIBUTING.md`:

```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt        # runtime deps
pip install -r requirements-dev.txt   # dev deps

black .                   # format
ruff check .              # lint
mypy                      # type check
pytest --cov=src tests/   # test (80% coverage target)
```

Note: `requirements.txt` and `requirements-dev.txt` don't yet exist — create them when adding Python code.

## Architecture

**n8n Workflows** (`n8n/bot sources/`): Three JSON workflow definitions importable directly into n8n. The main one ("Pauline Assistante IA") is a multi-channel French-language AI assistant using OpenAI GPT models with tools for Perplexity search, SQL queries, and calculations. Workflows use n8n's LangChain integration for agent loops (max 10 iterations).

**Database**: PostgreSQL 16 serves as n8n's backend store. Credentials and connection info flow entirely through environment variables defined in `docker/postgres/.env`.

**Planned Python stack**: FastAPI + LangChain/LangGraph for AI agent orchestration, with RAG using vector databases (Pinecone/Weaviate/Chroma).

## Conventions

- Commit messages follow Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`)
- Documentation and code comments are in French
- PRs require 1 approval; CI checks must pass (CI not yet configured)
- Security issues → security@aiqual.ch (48h acknowledgement SLA)
