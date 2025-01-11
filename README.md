# Uber_Clone
Building a complete Uber Clone app using the MERN stack! Creating a fully functional ride-booking application with new features.

## Day-1
- Initialize the node modules and express
- Made the entry point for the website - server.js
- Second file is app.js
- Then, gitignore
- For models, npm i mongoose -> database connect for now it's local database
- Hashing passwords

## Day-2
- Implemented user registration and login functionality
- Used bcrypt for password hashing and JWT for authentication
- Created user models and services
- Added validation for user input using express-validator
- Created middleware for authentication

## User Registration Endpoint Documentation

### POST /users/register

#### Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `fullname` (object, required): An object containing the user's full name.
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, required): The last name of the user. Must be at least 3 characters long.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Response
##### Success (201 Created)
- **Status Code**: 201
- **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "_id": "60c72b2f9b1e8a001c8e4d5a",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com",
      "password": "$2b$10$...",
      "socketID": null
    }
  }
  ```

##### Error (400 Bad Request)
- **Status Code**: 400
- **Body**: A JSON object containing the error details.
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be atleast 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Last name should be 3 characters long",
        "param": "fullname.lastname",
        "location": "body"
      },
      {
        "msg": "Password must be 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

## User Login Endpoint Documentation

### POST /users/login

#### Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns an authentication token along with the user details.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

#### Response
##### Success (200 OK)
- **Status Code**: 200
- **Body**: A JSON object containing the authentication token and user details.
  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "password": "string",
      "socketID": "string"
    }
  }
  ```

## User Profile Endpoint Documentation

### GET /users/profile

#### Description
This endpoint is used to get the profile of the logged-in user. It requires authentication.

#### Response
##### Success (200 OK)
- **Status Code**: 200
- **Body**: A JSON object containing the user details.
  ```json
  {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "socketID": "string"
  }
  ```

## User Logout Endpoint Documentation

### GET /users/logout

#### Description
This endpoint is used to log out the user. It clears the authentication token from cookies.

#### Response
##### Success (200 OK)
- **Status Code**: 200
- **Body**: A JSON object containing a success message.
  ```json
  {
    "message": "Logged Out"
  }
  ```