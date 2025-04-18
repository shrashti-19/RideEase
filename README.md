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

## Home.jsx

**Description:**
The `Home` component is a React functional component that serves as the landing page for the application. It displays a background image, the Uber logo, and a button to continue to the login page.

**Props:**
- None

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used as the main entry point for users visiting the application. It provides a visually appealing introduction and a call-to-action button to proceed to the login page.

---

## UserSignup.jsx
## Description: The UserSignup component is a React functional component that provides a signup form for users. It includes input fields for first name, last name, email, and password to register a new user.

Props:

None
State:

email (string): The email entered by the user.
password (string): The password entered by the user.
firstname (string): The first name entered by the user.
lastname (string): The last name entered by the user.
userData (object): The user data object containing the entered information.
Methods:

submitHandler: Handles the form submission and updates the user data state.
Usage: This component is used to render a signup form for users, allowing them to register for the application.



## UserLogin.jsx

**Description:**
The `UserLogin` component is a React functional component that provides a login form for users. It includes input fields for email and password to authenticate a user.

**Props:**
- None

**State:**
- `email` (string): The email entered by the user.
- `password` (string): The password entered by the user.
- `userData` (object): The user data object containing the entered information.

**Methods:**
- `submitHandler`: Handles the form submission and updates the user data state.

**Usage:**
This component is used to render a login form for users, allowing them to log in to the application.

---

## UserContext.jsx

**Description:**
The `UserContext` component is a React functional component that provides a context for the entire application. It wraps the application inside a context provider, allowing state and functions to be shared across different components.

**Props:**
- `children` (ReactNode): The child components that will be wrapped by the context provider.

**State:**
- `user` (object): The user data object containing email and full name.

**Methods:**
- None

**Usage:**
This component is used to wrap the entire application, enabling the use of context to manage global state and share data between components.

---

### CaptainSignup.jsx
## Description: The CaptainSignup component is a React functional component that provides a signup form for captains. It includes input fields for email and other necessary information to register a new captain.

Props:

None
State:

email (string): The email entered by the captain.
password (string): The password entered by the captain.
firstName (string): The first name entered by the captain.

Methods:

None
## Usage: This component is used to render a signup form for captains, allowing them to register for the application.

---

### CaptainLogin.jsx

**Description:**
The `CaptainLogin` component is a React functional component that provides a login form for captains. It includes input fields for email and password to authenticate a captain.

**Props:**
- None

**State:**
- `email` (string): The email entered by the captain.
- `password` (string): The password entered by the captain.

**Methods:**
- `submitHandler`: Handles the form submission for logging in the captain.

**Usage:**
This component is used to render a login form for captains, allowing them to log in to the application.

---

## Main.jsx

**Description:**
The `Main` component is the entry point of the React application. It sets up the application with necessary providers and renders the root component.

**Props:**
- None

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to initialize the React application and wrap it with necessary context providers and routing.

---

## App.jsx

**Description:**
The `App` component is the root component of the application. It serves as the main container for all other components and handles the routing and layout of the application.

**Props:**
- None

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used as the main entry point for the React application. It typically includes routing logic and renders the main layout of the application.

---

## CaptainProtectedWrapper.jsx

**Description:**
The `CaptainProtectedWrapper` component is a React functional component that protects routes for captains. It ensures that only authenticated captains can access certain routes.

**Props:**
- `children` (ReactNode): The child components that will be rendered if the captain is authenticated.

**State:**
- `isLoading` (boolean): Indicates whether the authentication check is in progress.

**Methods:**
- None

**Usage:**
This component is used to wrap routes that should only be accessible to authenticated captains.

---

## UserProtectedWrapper.jsx

**Description:**
The `UserProtectedWrapper` component is a React functional component that protects routes for users. It ensures that only authenticated users can access certain routes.

**Props:**
- `children` (ReactNode): The child components that will be rendered if the user is authenticated.

**State:**
- `isLoading` (boolean): Indicates whether the authentication check is in progress.

**Methods:**
- None

**Usage:**
This component is used to wrap routes that should only be accessible to authenticated users.

---

## UserLogout.jsx

**Description:**
The `UserLogout` component is a React functional component that handles the logout process for users. It makes an API request to log out the user and redirects them to the login page.

**Props:**
- None

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to log out the user and redirect them to the login page.

---

## CaptainLogout.jsx

**Description:**
The `CaptainLogout` component is a React functional component that handles the logout process for captains. It makes an API request to log out the captain and redirects them to the captain login page.

**Props:**
- None

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to log out the captain and redirect them to the captain login page.

### Home.jsx

**Description:**
The `Home` component is a React functional component that serves as the landing page for the application. It displays a background image, the Uber logo, and a form to input pickup and destination locations.

**Props:**
- None

**State:**
- `pickup` (string): The pickup location entered by the user.
- `destination` (string): The destination location entered by the user.
- `panelOpen` (boolean): State to control the visibility of the location search panel.
- `vehiclePanelOpen` (boolean): State to control the visibility of the vehicle selection panel.
- `confirmedRidePanel` (boolean): State to control the visibility of the confirmed ride panel.
- `vehicleFound` (boolean): State to control the visibility of the vehicle found panel.
- `waitingForDriver` (boolean): State to control the visibility of the waiting for driver panel.

**Methods:**
- `submitHandler`: Handles the form submission to prevent default behavior.
- `useGSAP`: Animates the panels using GSAP based on the state changes.

**Usage:**
This component is used as the main entry point for users to find and book a ride.

### Riding.jsx

**Description:**
The `Riding` component is a React functional component that displays the current ride details, including the vehicle, driver, and fare information.

**Props:**
- None

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to display the details of the ongoing ride and provide an option to make a payment.

### Start.jsx

**Description:**
The `Start` component is a React functional component that serves as the starting page for the application. It displays a background image, the Uber logo, and a button to continue to the login page.

**Props:**
- None

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used as the initial landing page for users to get started with the application.

### ConfirmRidePopUp.jsx

**Description:**
The `ConfirmRidePopUp` component is a React functional component that displays a popup for confirming a ride. It shows the driver details, ride details, and options to confirm or cancel the ride.

**Props:**
- `setConfirmridePopUpPanel` (function): Function to close the confirm ride popup panel.
- `setRidePopPanel` (function): Function to close the ride popup panel.

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to confirm or cancel a ride from a popup.

### ConfirmedRide.jsx

**Description:**
The `ConfirmedRide` component is a React functional component that displays the confirmed ride details, including the pickup and destination locations, and the fare.

**Props:**
- `setVehiclePanelOpen` (function): Function to close the vehicle panel.
- `setVehicleFound` (function): Function to set the vehicle found state.
- `setConfirmRidePanel` (function): Function to close the confirm ride panel.

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to display the confirmed ride details and provide an option to confirm the ride.

### LocationSearchPanel.jsx

**Description:**
The `LocationSearchPanel` component is a React functional component that displays a list of predefined locations for the user to select as the pickup or destination.

**Props:**
- `setVehiclePanel` (function): Function to open the vehicle panel.
- `setPanelOpen` (function): Function to close the location search panel.

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to display a list of locations for the user to select.

### LookingForDriver.jsx

**Description:**
The `LookingForDriver` component is a React functional component that displays a message indicating that the application is looking for a driver for the ride.

**Props:**
- `setVehicleFound` (function): Function to set the vehicle found state.

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to display a message while the application is looking for a driver.

### RidePopUp.jsx

**Description:**
The `RidePopUp` component is a React functional component that displays a popup for a new ride request. It shows the ride details and options to accept or ignore the ride.

**Props:**
- `setRidePopPanel` (function): Function to close the ride popup panel.
- `setConfirmridePopUpPanel` (function): Function to open the confirm ride popup panel.

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to display a new ride request and provide options to accept or ignore the ride.

### VehiclePanel.jsx

**Description:**
The `VehiclePanel` component is a React functional component that displays a list of available vehicles for the user to select for the ride.

**Props:**
- `setConfirmedRidePanel` (function): Function to open the confirmed ride panel.
- `setVehiclePanelOpen` (function): Function to close the vehicle panel.

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to display a list of available vehicles for the user to select.

### WaitForDriver.jsx

**Description:**
The `WaitForDriver` component is a React functional component that displays the details of the driver and vehicle while the user is waiting for the driver to arrive.

**Props:**
- `waitingForDriver` (function): Function to set the waiting for driver state.

**State:**
- None

**Methods:**
- None

**Usage:**
This component is used to display the details of the driver and vehicle while the user is waiting for the driver to arrive.

