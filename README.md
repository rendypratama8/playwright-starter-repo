# Playwright Starter Repo — Squadap × Bluebird Masterclass

Enterprise Playwright v1.56+ starter kit featuring Page Object Model (`pages/`), Custom Fixtures (`fixtures/`), `storageState` auth reuse (`tests/auth.setup.ts`), and pre-initialized Playwright AI Agents (`vscode`, `claude`, `opencode`).

## Quick Start

1. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Set `BASE_URL` to your running `squadap-training-platform` URL (default: `http://localhost:5173`).

2. Install dependencies and browser binaries:
   ```bash
   npm install
   npx playwright install chromium
   ```

3. Run tests against Practice App **v1 (Stable)**:
   ```bash
   npm run test:v1
   ```

4. Run tests against Practice App **v2 (Broken UI Locators + Seeded Bug)** for Chapter 4 Healing Lab:
   ```bash
   npm run test:v2
   ```

5. Open the HTML report and traces:
   ```bash
   npm run report
   ```

## Pre-Initialized AI Agents

- **VS Code Copilot**: `.github/agents/*.agent.md` + `.vscode/mcp.json`
- **Claude Code**: `.claude/agents/*.md` + `.mcp.json`
- **OpenCode**: `.opencode/prompts/*.md` + `opencode.json`

Read `.github/copilot-instructions.md` and `specs/reference-booking-plan.md` before running Planner, Generator, or Healer.

## Links

- Learning Portal: `http://localhost:5173/learn`
- Sandbox v1: `http://localhost:5173/sandbox/login?v=1`
- Sandbox v2: `http://localhost:5173/sandbox/login?v=2`
