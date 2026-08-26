# Jones Automation Exercise

## Prerequisites

* Node.js
* npm

## Setup

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Run the Automation

Run the Playwright tests:

```bash
npx playwright test
```

The automation runs on Chromium, Firefox, and WebKit.

## View the Test Report

```bash
npx playwright show-report
```

## What it does

The automation fills out the contact form, selects **51-500** employees, captures `before-submit.png` before submission, submits the form, and verifies that the Thank You page is reached.
