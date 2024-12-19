# Login and Registration System

This project is a secure login and registration system built with **Node.js** and various libraries, designed to provide user authentication and session management. The database used is **MongoDB**, and the views are rendered using **EJS** templates.

## Features

- User registration with secure password hashing.
- User login with session management.
- Error and success message handling with **connect-flash**.
- Input validation and error feedback.

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with **mongoose**
- **passport** and **passport-local** for authentication
- **bcryptjs** for password hashing
- **express-session** for session management
- **connect-flash** for flash messages

### Frontend
- EJS templates
- **express-ejs-layouts** for layout management

### Development Dependencies
- **nodemon** for development ease

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   SESSION_SECRET=<your_secret_key>
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   The application will run on `http://localhost:3000`.

## Usage

### Registration
- Navigate to the registration page.
- Fill in the required details (e.g., name, email, and password).
- Submit the form to create an account.

### Login
- Navigate to the login page.
- Enter your email and password.
- Upon successful authentication, you will be redirected to the dashboard.

### Logout
- Click the logout button to end your session.

## File Structure

```
project-folder/
├── config/
│   ├── passport.js   # Passport strategy configuration
├── models/
│   ├── User.js       # User schema definition
├── routes/
│   ├── index.js      # Public routes
│   ├── users.js      # Authentication routes
├── views/
│   ├── layouts/      # Layout templates
│   ├── partials/     # Reusable partials
│   ├── login.ejs     # Login page
│   ├── register.ejs  # Registration page
│   ├── dashboard.ejs # User dashboard
├── .env              # Environment variables
├── app.js            # Main application file
├── package.json      # Project metadata
└── README.md         # Project documentation
```

## Libraries Used

- **bcryptjs**: For hashing passwords securely.
- **connect-flash**: For displaying success and error messages.
- **ejs**: For dynamic HTML templating.
- **express**: Web framework for Node.js.
- **express-ejs-layouts**: For managing layouts in EJS.
- **express-session**: For session management.
- **mongoose**: For MongoDB object modeling.
- **passport**: For user authentication.
- **passport-local**: Local strategy for authentication.
- **nodemon**: For automatically restarting the server during development.

## Future Enhancements

- Add email verification.
- Implement role-based access control.
- Integrate OAuth for social login options.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Contact
For any issues or contributions, feel free to open a pull request or contact me at **faridamiyaji22@gmail.com**.
