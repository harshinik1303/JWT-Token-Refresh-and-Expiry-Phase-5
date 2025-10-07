
JWT Token Refresh and Expiry


1.Aim:


    The aim of the JWT Token Refresh and Expiry project is to implement secure user authentication by using JSON Web Tokens (JWT) that automatically expire after a set time and can be renewed using refresh tokens — ensuring both security and smooth user experience.

   
2.Features:


     User Login and Signup – Users can register and log in securely.
     Access Token Creation – A token is generated after login.
     Token Expiry – Access token expires after a short time for safety.
     Refresh Token – Used to get a new access token without logging in again.
     Logout Option – Users can log out and remove tokens.
     Secure Authentication – Passwords are encrypted, and tokens are verified.
     Error Handling – Shows proper messages for invalid or expired tokens.
   

3.Technologies:


   Frontend (Optional – if included)
   
     HTML / CSS / JavaScript – For creating a simple UI (login & signup forms).
     
     React.js (optional) – For building a dynamic, responsive frontend interface.
     
  Backend
  
     Node.js – JavaScript runtime for building the backend server.
     
     Express.js – Framework for handling routes, middleware, and API requests easily.
     
  Authentication & Security
  
     JWT (JSON Web Token) – For secure authentication, access token creation, and refresh token handling.
     
     bcrypt.js – For password hashing and encryption before storing in the database
     
     dotenv – For managing environment variables securely (like secret keys).
     
     cookie-parser / cors – For managing cookies and cross-origin requests securely.
     
  Database
  
     MongoDB – To store user details and refresh tokens.
     
     Mongoose – ODM library to connect and interact with MongoDB easily.

Aim:

To build a secure authentication system where users log in using JSON Web Tokens (JWT).
The project automatically expires tokens after a set time and provides a refresh mechanism to generate new tokens without requiring the user to log in again.

Features:

User Authentication – Login with username and password using JWT.

Access Token – Short-lived token used for secure API access.

Refresh Token – Long-lived token to generate a new access token when it expires.

Token Expiry Handling – Automatically expires access tokens after a fixed time (e.g., 15 minutes).

Token Refresh API – Generates a new token pair without requiring login.

Logout Feature – Invalidates refresh token to end session securely.

Security Enhancements – Tokens stored safely, password hashed using bcrypt.

Error Handling – Handles expired or invalid tokens gracefully.

Technologies Used:
Backend:

Node.js – Server-side runtime

Express.js – Web framework for APIs

MongoDB – Database for storing user data and refresh tokens

JWT (jsonwebtoken) – For generating and verifying tokens

bcrypt.js – For hashing passwords

Frontend (optional for testing):

Postman / Thunder Client – For testing API endpoints
     

