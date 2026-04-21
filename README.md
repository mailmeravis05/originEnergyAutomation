 # Playwright Typescript Automation Framework

This is a sample automation framework using Playwright, Typescript and PageObject Model (POM)
The framework is designed to run UI tests. 
## Getting started

## Installing Dependencies:**

```bash
npm install
```

## Running the tests:**

```bash
npm run test - Run all tests in headed mode
npm run test:chrome - Run UI tests in Chromium
npm run test:webkit - Run UI tests in Webkit
npm run test:headless - Run all tests in headless mode

```

## Running the tests with docker container locally
```bash
docker build -t origin-energy-tests . && docker run --rm origin-energy-tests
```

## issues/Limitations as of today
```bash
There is an issue with opening pdf URL rendering with Chromium headless
```


