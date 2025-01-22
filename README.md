# AUTH_MERN

# AUTHENTICATION APP IN MERN 

This project is a **MERN AUTHENTICATION APP** developed using EXPRESS JS AND MONGODB. The app is designed to provide a authentication and authorization feature to user for register and login the application. 
This repository contains all the BACKEND folder.


## Table of Contents
- [Features](#features)
- [Getting Started](#GettingStarted)
- [Screenshots](#screenshots)
- [Built With](#BuiltWith)
- [Contributing](#Contributing)
- [License](#license)
- [Save and Commit](#SaveandCommit)

## 📱Features

- **User Authentication Screens:** Includes login and sign-up interfaces with a clean and modern design.
- **Home Dashboard:** A user-friendly dashboard providing quick access to book clinic or home visits.
- **Doctor Profiles:** Detailed doctor profiles with reviews, location, and booking options.
- **Messaging Interface:** Real-time chat UI designed for patient-doctor communication.
- **Appointment Management:** Screens to view, schedule, reschedule, or cancel appointments.
- **Settings Page:** Customizable settings for profile management, notifications, and privacy.


## 🎨 Design Principles
- **Minimalist and Modern Design:** Focused on simplicity and ease of use.
- **Consistent Visuals:** Unified color schemes, icons, and typography throughout the app.
- **Responsive Layout:** Designed to work seamlessly across various devices.


## 🚀 Getting Started

To run this project locally, clone the repository and follow the steps below:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd your-repository-name
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set Up Environment Variables**
   ```bash
   MONGO_URL=your-mongodb-connection-string
   PORT=5000
   JWT_SECRET = make the jwt secret code
   SMTP_USER = make smtp id and give the user id
   SMTP_PASS = smtp password here
   SENDER_EMAIL = provide your email details here

5. ***Run the Express.js Project***
   npm run dev

    
## Screenshots

# Connection to the Databases
![Screenshot 2025-01-22 212325](https://github.com/user-attachments/assets/c7ad5a7c-2095-44e1-890d-1ac74fe1ac29)

# User Register
![Screenshot 2025-01-22 212536](https://github.com/user-attachments/assets/80f695d2-8a62-410d-b274-f63c26b81364)

# User got welcome email for registering 
![Screenshot 2025-01-22 212623](https://github.com/user-attachments/assets/e2f4c7e9-4f1a-4408-b0bf-374d5f544eb1)

# Details got stored in database and password will stored in the hash format
![Screenshot 2025-01-22 212744](https://github.com/user-attachments/assets/78163ba9-3bb3-4d36-9556-83b37a2062d3)

# Login to the user
![Screenshot 2025-01-22 212559](https://github.com/user-attachments/assets/470502d6-0e78-41b1-9b26-3d638c1ed97b)

# Now if user will enter the wrong password, they got error response as "Invalid Password"
![Screenshot 2025-01-22 212651](https://github.com/user-attachments/assets/ff6dbb65-b401-474e-bab9-c70e7300054c)

# Now if user will enter the invalid email, they will get same error
![Screenshot 2025-01-22 212709](https://github.com/user-attachments/assets/93f4e674-6f25-4804-a752-6974c09a4e58)


## 🛠️ Built With

- **Express:** Yes, Express.js is a web application framework for Node.js, designed to build web applications.
- **Database:** MONGO DB is used in this application.


## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.


## Contact Information

For any queries, feel free to reach out at akshayraj9123@gmail.com.

## Save and Commit

- git add README.md
- git commit -m "Add README"
- git push origin main

