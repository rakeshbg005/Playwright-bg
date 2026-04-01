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

3. Install Playwright browsers (recommended):

   ```bash
   npx playwright install
   ```

4. Generate BDD artifacts:

   ```bash
   npx bddgen
   ```

5. Run tests:

   ```bash
   npx playwright test --headed --workers=1
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
    "bddtest": "npx bddgen && npx playwright test --headed --workers=1"
  }
  ``` 
