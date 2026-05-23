# Playwright Automation Evaluation

## Overview

This project contains a Playwright automation framework developed in JavaScript for the provided demo task management application.

The framework uses a data-driven testing approach where all test scenarios are maintained in a JSON file. This helps reduce code duplication and makes the test suite easier to maintain and scale.

## Technologies Used

- JavaScript
- Playwright
- JSON

## What This Automation Covers

The automation performs:

- Login validation
- Navigation between applications
- Task verification
- Column verification
- Tag validation

## Project Structure

```text
playwright-evaluation/
│
├── test-data/
│   └── tasks.json
│
├── tests/
│   └── task-board.spec.js
│
├── README.md
├── package.json
└── package-lock.json
```

## Installation

```bash
npm install
npx playwright install
```

## Execute Tests

```bash
npx playwright test
```

## Execute Tests in Headed Mode

```bash
npx playwright test --headed
```

## Data-Driven Implementation

All test scenarios are stored in:

```text
test-data/tasks.json
```

The Playwright test file reads the JSON data dynamically and executes validations for each scenario using reusable test logic.

This approach improves:
- maintainability
- scalability
- readability

## Test Validations

Each scenario validates:
- correct application navigation
- task presence
- correct task column
- expected tags