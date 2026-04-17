# Playwright-bg
playwright implementation

## Setup and Run

1. Clone repository:

   ```bash
   git clone https://github.com/rakeshbg005/Playwright-bg.git
   cd Playwright-bg
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install dotenv and cross-env:

   ```bash
   npm install dotenv --save
   npm install -D cross-env
   ```

4. Install Playwright browsers (recommended):

   ```bash
   npx playwright install
   ```

5. Generate BDD artifacts:

   ```bash
   npx bddgen
   ```

6. Run tests:

   ```bash
   npx playwright test --headed --workers=1
   ```

7. Run tests for a specific environment and tag:

   ```powershell
   $env:ENVIRONMENT="int"; npx bddgen; npx playwright test --grep "@test1" --headed --workers=1
   ```

## Troubleshooting

- If `npx bddgen` says install `playwright-bdd`, run:
  ```bash
  npm install -D playwright-bdd
  ```
- If Playwright says `Cannot find module '@playwright/test'`, ensure dependencies are installed with `npm install` and rerun.
- For CI and repeatable setup, add scripts in `package.json`:

  ```json
  "scripts": {
    "setup": "npm install && npx playwright install",
    "bddtest": "cross-env ENVIRONMENT=int npx bddgen && npx playwright test --grep \"@test1\" --headed --workers=1"
  }
  ```

- To run the environment/tag command directly on Windows PowerShell:
  ```powershell
  $env:ENVIRONMENT="int"; npx bddgen; npx playwright test --grep "@test1" --headed --workers=1
  ``` 
