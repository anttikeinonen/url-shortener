# URL Shortener

## Description
A URL shortener service built with Node.js and TypeScript.

## Prerequisites
- Node.js
- Docker (used for both the database and running tests)
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

3. Start the test database for local development:
    ```sh
    docker-compose -f docker-compose.dev.yml up
    ```

## Usage

### Development
To start the development server, ensure the database is running:

```sh
docker-compose -f docker-compose.dev.yml up
```

Then, start the development server:

```sh
npm run dev
```

### Running Tests
Before running tests, ensure the test database is running:

```sh
docker-compose -f docker-compose.dev.yml up
```

Then run the tests:

```sh
npm run test
```

## Docker

### Running the Application
To build and run the application along with the database in a containerized environment:

```sh
docker-compose up --build
```

To stop the running containers:

```sh
docker-compose down
```

### Running Tests in Docker
The tests can also be executed in a Docker environment using:

```sh
docker-compose -f docker-compose.test.yml up --build
```

## Configuration
- **Docker Compose Files:**
  - `docker-compose.yml`: Runs the app and database.
  - `docker-compose.dev.yml`: Sets up the database for local development and testing.
  - `docker-compose.test.yml`: Runs the test environment.
  
- **Other Configuration Files:**
  - `jest.config.ts`: Jest configuration for testing
  - `tsconfig.json`: TypeScript configuration

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
