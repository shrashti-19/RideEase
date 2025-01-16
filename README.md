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
        "msg": "Password must be 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
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

##### Error (401 Unauthorized)
- **Status Code**: 401
- **Body**: A JSON object containing the error details.
  ```json
  {
    "message": "Unauthorized access"
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

## Captain Model Documentation

### Captain Schema
The `captainSchema` defines the structure of the captain document in the MongoDB database. It includes the following fields:

- `fullname` (object, required): An object containing the captain's full name.
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, required): The last name of the captain. Must be at least 3 characters long.
- `email` (string, required): The email address of the captain. Must be unique and in a valid email format.
- `password` (string, required): The password for the captain. It is stored as a hashed value and is not selected by default.
- `socketId` (string): The socket ID for real-time communication.
- `status` (string, required): The availability status of the captain. It can be either 'active' or 'inactive'. The default value is 'inactive'.
- `vehicle` (object, required): An object containing the vehicle details.
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (number, required): The plate number of the vehicle. Must be at least 1.
  - `vehicleTypes` (string, required): The type of the vehicle. It can be either 'car', 'motorcycle', or 'auto'.
- `location` (object): An object containing the location details.
  - `latitude` (number): The latitude of the captain's location.
  - `longitude` (number): The longitude of the captain's location.

### Methods

#### `generateAuthToken`
Generates a JWT for the captain.
```javascript
captainSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};
```

#### `comparePassword`
Compares the provided password with the captain's hashed password.
```javascript
captainSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};
```

#### `hashPassword`
Hashes the provided password using bcrypt.
```javascript
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}
```

#### Response
##### Success (201 Created)
- **Status Code**: 201
- **Body**: A JSON object containing the captain details.
  ```json
  {
    "message": "Captain registered successfully",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "password": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleTypes": "string"
      },
      "status": "string",
      "socketId": "string",
      "location": {
        "latitude": "number",
        "longitude": "number"
      }
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
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicle.vehicleTypes",
        "location": "body"
      }
    ]
  }
  ```

## Captain Login Endpoint Documentation

### POST /captains/login

#### Description
This endpoint is used to log in an existing captain. It validates the input data, checks the captain's credentials, and returns an authentication token along with the captain details.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

#### Response
##### Success (200 OK)
- **Status Code**: 200
- **Body**: A JSON object containing the authentication token and captain details.
  ```json
  {
    "token": "string",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "password": "string",
      "socketId": "string",
      "status": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleTypes": "string"
      },
      "location": {
        "latitude": "number",
        "longitude": "number"
      }
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
        "msg": "Password must be 6 characters long",
        "param": "password",
        "location": "body"
      }
    ],
    "message": "Invalid email or password"
  }
  ```

## Captain Profile Endpoint Documentation

### GET /captains/profile

#### Description
This endpoint is used to get the profile of the logged-in captain. It requires authentication.

#### Response
##### Success (200 OK)
- **Status Code**: 200
- **Body**: A JSON object containing the captain details.
  ```json
  {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "socketId": "string",
    "status": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleTypes": "string"
    },
    "location": {
      "latitude": "number",
      "longitude": "number"
    }
  }
  ```

##### Error (401 Unauthorized)
- **Status Code**: 401
- **Body**: A JSON object containing the error details.
  ```json
  {
    "message": "Unauthorized access"
  }
  ```
## Captain Logout Endpoint Documentation
### GET /captains/logout
# Description
This endpoint is used to log out the captain. It clears the authentication token from cookies and blacklists the token.

## Response
## Success (200 OK)
## Status Code: 200
## Body: A JSON object containing a success message
{
  "message": "Logged Out"
}

## Example Request
curl -X GET http://localhost:3000/captains/logout \
-H "Authorization: Bearer <token>"

## Example Response
### Succes

{
  "message": "Logged Out"
}


## FRONTEND PART