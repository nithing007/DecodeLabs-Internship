# Week 3: CI/CD Pipeline Basics

## Project Overview

This project implements an automated Continuous Integration (CI) pipeline using GitHub Actions for the DecodeLabs DevOps internship.

The pipeline automatically validates code formatting, checks JavaScript syntax, and runs unit tests on every commit and pull request. Note that this phase focuses exclusively on Continuous Integration (automated verification), not Continuous Deployment (no deployment targets or environments are configured yet).

## Objectives

- Set up an automated CI workflow with GitHub Actions.
- Ensure code quality using ESLint.
- Validate JavaScript syntax before execution.
- Run automated unit tests using Node.js's built-in test runner (`node:test`).
- Use reproducible dependency installs with `npm ci` and caching.

## Technologies Used

- **Runtime**: Node.js (v22 LTS in CI; requires `>=20.0.0`)
- **Package Manager**: npm with committed `package-lock.json`
- **Testing**: Node.js built-in test runner (`node:test`) and strict assertions (`node:assert/strict`)
- **Linter**: ESLint (v10 Flat Config)
- **CI/CD Platform**: GitHub Actions (`ubuntu-latest`)

## Project Structure

```text
Week-03-CI-CD-Pipeline/
├── .gitignore          # Ignores node_modules and debug logs
├── eslint.config.js    # ESLint configuration
├── package.json        # Project scripts, metadata, and devDependencies
├── package-lock.json   # Pinned dependency lockfile
├── README.md           # Project documentation
├── src/
│   └── app.js          # Application code (getStatus, add with validation)
└── tests/
    └── app.test.js     # Unit tests using node:test
```

The GitHub Actions workflow is located at `.github/workflows/ci-cd.yml`.

## CI Workflow

The CI pipeline runs automatically on GitHub Actions and executes six stages in sequence:

1. **Checkout repository**: Retrieves project source files (`actions/checkout@v4`).
2. **Set up Node.js**: Installs Node.js 22 LTS and configures npm dependency caching (`actions/setup-node@v4`).
3. **Install dependencies**: Runs `npm ci` for a clean, deterministic install from `package-lock.json`.
4. **Run linter**: Runs `npm run lint` with ESLint to enforce code quality.
5. **Validate syntax**: Runs `npm run validate:syntax` (`node --check`) to verify JavaScript syntax.
6. **Run automated tests**: Runs `npm test` (`node --test`) to verify application functions and edge cases.

If any stage fails, the pipeline stops and marks the check as failed.

## Prerequisites and Setup

### Prerequisites
- Node.js 20 or higher (v22 recommended)
- npm 9 or higher
- Git

### Setup
From the repository root, switch to this directory and install dependencies:

```bash
cd Week-03-CI-CD-Pipeline
npm install
```

To reproduce the exact clean install used in CI, you can run:

```bash
npm ci
```

## Commands to Run the Checks Locally

Run these commands from the `Week-03-CI-CD-Pipeline/` directory:

- **Run linter**:
  ```bash
  npm run lint
  ```
- **Validate syntax**:
  ```bash
  npm run validate:syntax
  ```
- **Run build check**:
  ```bash
  npm run build
  ```
- **Run automated tests**:
  ```bash
  npm test
  ```
- **Run all checks**:
  ```bash
  npm run lint && npm run validate:syntax && npm test
  ```

## GitHub Actions Triggers

The workflow (`.github/workflows/ci-cd.yml`) triggers on:

- **Push** to `main` and `devops/week-03-ci-cd` branches.
- **Pull Requests** targeting the `main` branch.

This ensures all changes submitted to `main` are tested before merging.

## Expected Results

When you run `npm test` locally, all tests should pass:

```text
✔ getStatus returns the expected pipeline status message
✔ add calculates sum of positive numbers
✔ add supports negative numbers
✔ add handles zero correctly
✔ add supports decimal numbers
✔ add throws TypeError for non-numeric or missing inputs
✔ add throws TypeError for NaN or infinite values
ℹ tests 7
ℹ suites 0
ℹ pass 7
ℹ fail 0
```

In GitHub, the **Build and Test** workflow job will report a green status (`✔`) with all stages completed successfully.

## Brief Troubleshooting Guidance

- **Linter fails (`npm run lint`)**: Review the error output from ESLint. Fix any undeclared variables, missing semicolons, or unused arguments, then rerun `npm run lint`.
- **Syntax check fails (`npm run validate:syntax`)**: A file contains invalid JavaScript syntax. Check the file and line number shown in the error output.
- **Tests fail (`npm test`)**: An assertion in `tests/app.test.js` did not match the result in `src/app.js`. Ensure inputs and return values adhere to the expected contract.
- **Lockfile mismatch (`npm ci` fails)**: If dependencies in `package.json` changed without updating `package-lock.json`, run `npm install` locally to sync the lockfile before pushing.
- **Wrong directory**: Remember to run npm commands from inside `Week-03-CI-CD-Pipeline/`.

## Possible Future Improvements

- Add code coverage reporting using Node.js's native test coverage feature.
- Add pre-commit hooks to run linting and tests before committing.
- Add an automated deployment stage (CD) once a staging or production hosting environment is configured.
