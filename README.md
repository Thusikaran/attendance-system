# attendance-system

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Project](#running-the-project)
4. [Testing Credentials](#testing-credentials)
5. [API Endpoints](#api-endpoints)
6. [License](#license)

---
## Features
- User authentication with JWT.
- Validation for login credentials.
- Redirects to the appropriate pages based on the user's login status.
- Simple, responsive design.

---
## Technologies Used
- **Frontend:** React, Vite, CSS.
- **Backend:** Spring Boot, Java.
- **Build Tools:** Maven, npm.
- **Authentication:** JSON Web Tokens (JWT).

---

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Java Development Kit (JDK)** (v17 or higher)
- **Maven** (v3.6.0 or higher)
- **Git**

---
### Installation

1. **Clone the Repository:**
   ```
   git clone https://github.com/yourusername/attendance-system.git
   cd attendance-system
   ```
2. **Frontend Setup:**
 ```
   cd client
   npm install
```
4. **Backend Setup:** Navigate to the server directory and build the backend:
```
cd ../server
mvn clean install
```
### Running the Project
1. Start the Backend Server:
 - Navigate to the server directory:
```
cd server
```
- Run the Spring Boot application:
```
mvn spring-boot:run
```
- The backend server should start at http://localhost:8080.
2. Start the Frontend Development Server:
- Navigate to the client directory:
```
cd ../client
```
- Run the React app:
```
npm run dev
```
- The frontend   start at http://localhost:3000.
### Testing Credentials
- To test the login functionality, use the following credentials:
```
Username: thusi
Password: 12072001
```
- For invalid login attempts, you can use:
```
Username: test
Password: wrongpassword
```
## API Endpoints
### Authentication Endpoints
1. Login:

- URL: /api/login
- Method: POST
- Payload:
```
{
  "username": "admin",
  "password": "admin123"
}
```
- Response:
```
{
  "token": "your-jwt-token"
}
```

## License
### This project is licensed under the MIT License. See the LICENSE file for details.
```
---

### How to Customize:
- Replace `https://github.com/yourusername/attendance-system.git` with your actual repository URL.
- Adjust the credentials in the **Testing Credentials** section based on your app’s requirements.
- Update **API Endpoints** to include other endpoints in your backend if applicable.

This `README.md` should provide clear instructions for setting up and testing your project. Let me know if you’d like further adjustments!
