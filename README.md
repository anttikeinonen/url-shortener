# URL Shortener

## Description
A URL shortener service built with Node.js and TypeScript.

## Prerequisites
- Node.js
- Docker
- Docker Compose

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage
1. Start the development server:
    ```sh
    npm start
    ```

2. Run tests:
    ```sh
    docker-compose up --build test
    ```

## Docker
1. Build and run the Docker container using Docker Compose:
    ```sh
    docker-compose up --build app
    ```

2. Stop the Docker container:
    ```sh
    docker-compose down app
    ```

## Configuration
- Configuration files:
  - `jest.config.ts`: Jest configuration for testing
  - `tsconfig.json`: TypeScript configuration
  - `docker-compose.yml`: Docker Compose configuration

## Project Structure
- `src/`: Source code
  - `app.ts`: Application entry point
  - `router.ts`: Route definitions
  - `sequelize.ts`: Sequelize configuration
  - `server.ts`: Server setup
  - `models/`: Database models
    - `url.ts`: URL model
- `tests/`: Test files
  - `router.test.ts`: Router tests
  - `setupTests.ts`: Test setup
  - `url.test.ts`: URL model tests
