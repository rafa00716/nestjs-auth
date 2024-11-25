# NestJS Authentication Example

This repository contains an example of implementing authentication using [NestJS](https://nestjs.com/), a framework for building server-side applications in Node.js. The application provides a basic structure for managing user registration, login, and security using JWT (JSON Web Tokens).

## Features

- JWT-based authentication.
- User registration with credential validation.
- Secure implementation following best security practices in NestJS.
- Route protection using NestJS Guards.
- Password hashing with `bcrypt` to secure sensitive user information.
- Input data validation middleware using `class-validator` and `class-transformer`.
- Modular architecture for easy maintenance and scalability.

## Technologies Used

- **NestJS**: Framework for Node.js applications.
- **TypeScript**: Typed superset of JavaScript for improved code quality.
- **Passport.js**: Library for managing authentication strategies.
- **JWT**: For managing session tokens.
- **bcrypt**: For secure password hashing.
- **class-validator** and **class-transformer**: For input data validation and transformation.
- **PostgreSQL**: Database for storing user information.
- **TypeOrm**: Database Orm.

## Requirements

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for dependency management

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rafa00716/nestjs-auth.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nestjs-auth
   ```

3. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Configuration

Rename the `.env.example` file to `.env` and set the required environment variables:

## Environment Variables

Define the following environment variables before running the application.

### Server Configuration

- **PORT**: Port for the application. Default: `3000`.

### Database Configuration

- **DB_TYPE**: Database type, e.g., `postgres`.
- **DB_HOST**: Database host. Default: `localhost`.
- **DB_USER**: Database username, e.g., `nestjs-auth`.
- **DB_PASSWORD**: Database password.
- **DB_NAME**: Database name, e.g., `nestjs-auth`.
- **DB_SCHEMA**: Database schema, e.g., `nestjs-auth`.
- **DB_PORT**: Database port. Default: `5432`.

### Security Configuration

- **x-create-pass**: Custom pass for user creation, e.g., `asasdasdasd`.
- **JWT_SECRET_KEY**: Secret key for JWT tokens, e.g., `SADFWQEEFWEFWE`.

### Note

Keep these variables secure, especially passwords and secret keys. Use a `.env` file and do not include it in version control.



## Running the Application

To run the application in development mode, use the following command:

```bash
npm run start:dev
# or
yarn start:dev
```

The application will be available at [http://localhost:3000](http://localhost:3000) by default.

## Main Endpoints

- **POST /auth/login**: Login for registered users.
  - **Body**: `{ "email": "string", "password": "string" }`
  - **Response**: `{ "access_token": "string" }`
- **GET /auth/profile**: Get the authenticated user's profile information.
  - **Headers**: `Authorization: Bearer <token>`

## Security

This example implements JWT authentication to protect the API endpoints. Only authenticated users can access certain routes.

NestJS Guards are used to protect routes and ensure that only users with a valid token can access specific resources. Additionally, user passwords are stored securely using `bcrypt` to ensure sensitive data is protected.

## Project Structure

The project follows a modular structure recommended by NestJS:

- **src/auth**: Authentication module containing services, controllers, and strategies for authentication.
- **src/users**: User module that handles the logic related to user creation and management.
- **src/guards**: Contains guards that protect application routes.
- **src/database**: Contains database connection configurations.

## Best Practices Implemented

- **Password Hashing**: Using `bcrypt` to hash passwords before storing them in the database.
- **Data Validation**: Using `class-validator` to validate incoming request data.
- **Modular Architecture**: Separation of code into modules for better maintainability and scalability.
- **Environment Variables**: Use of `.env` for sensitive configurations, keeping secrets out of the codebase.
- **Exception Handling**: Custom exception filters to handle errors gracefully and provide meaningful messages to the API consumers.

## Extending the Application

This authentication system can be extended to add more features such as:

- **Role-based Access Control (RBAC)**: Add roles like `admin`, `user`, etc., to control access to specific routes.
- **Social Authentication**: Integrate with Google, Facebook, or other social login providers using Passport.js strategies.
- **Two-Factor Authentication (2FA)**: Enhance security by adding two-factor authentication for user login.
- **Account Verification**: Send email verification links upon registration to validate user email addresses.
- **Rate Limiting**: Rate limiting can be integrated to prevent abuse and ensure security.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any questions or suggestions, you can create an [issue](https://github.com/rafa00716/nestjs-auth/issues) in the repository or contact me directly.

---

Thank you for using this NestJS authentication example! If you find it useful, feel free to star the repository.

