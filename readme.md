# API Boilerplate with Node.js, Express.js, and Clean Architecture

This project is a boilerplate for creating APIs using Node.js and Express.js, following the principles of clean architecture. It includes JWT authentication and other essential features to help you get started quickly.

## Features

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Clean Architecture**: A design pattern that separates the concerns of the application into different layers.
- **JWT Authentication**: Secure your API endpoints with JSON Web Tokens.
- **Environment Configuration**: Manage environment variables using dotenv.
- **Logging**: Integrated logging using Winston.
- **Error Handling**: Centralized error handling mechanism.
- **Testing**: Setup for unit and integration tests using Jest.

## Getting Started

### Prerequisites

- Node.js (>=18.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/myname-abdulmanap/api-express-boilerplate
  cd api-express-boilerplate
  ```

2. Install dependencies:
  ```sh
  npm install
  # or
  yarn install
  ```

3. Set up environment variables:
  ```sh
  cp .env.example .env
  ```

4. Start the development server:
  ```sh
  npm run dev
  # or
  yarn dev
  ```

## Project Structure

```
├── src
│   ├── config          # Environment variables and configuration
│   ├── controllers     # Route controllers
│   ├── middlewares     # Custom express middlewares
│   ├── models          # Database models
│   ├── routes          # Express routes
│   ├── services        # Business logic
│   ├── utils           # Utility functions
│   └── app.js          # Express app
├── tests               # Test cases
├── server.js           # Run App
├── .env.example        # Environment variables example
├── .gitignore          # Git ignore file
├── package.json        # NPM dependencies and scripts
└── README.md           # Project documentation
```

## Usage

### Running Tests

To run tests, use the following command:
```sh
npm test
# or
yarn test
```

### Building for Production

To build the project for production, use the following command:
```sh
npm run build
# or
yarn build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [JWT](https://jwt.io/)
