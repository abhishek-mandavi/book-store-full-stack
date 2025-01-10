# book-store-full-stack
A Full-Stack Book Store Application built using **React**, **Node.js**, and **MongoDB**. The app allows users to browse books, view book details, and manage purchases. It features user authentication, book search functionality, and shopping cart features.

## Features

- **User Authentication**: Sign up, log in, and log out.
- **Browse Books**: View all available books and filter/search based on categories.
- **Book Details**: View detailed information about each book.
- **Shopping Cart**: Add books to cart and proceed to checkout.
- **Admin Panel**: Admin users can add, update, or remove books from the store.
- **Responsive Design**: Mobile-friendly and responsive layout.

---

## Tech Stack

### Frontend:
- **React**: For building the user interface.
- **React Router**: For navigation between pages.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/)

### Steps

1. **Clone the repository**:

    git clone https://github.com/abhishek-mandavi/bookstore-app.git
    cd bookstore-app
    

2. **Install dependencies**:
    For the backend:
    
    cd backend
    npm install
    

    For the frontend:
    
    cd frontend
    npm install
    


3. **Set up environment variables**: Create a `.env` file in the backend directory. See [Environment Variables](#environment-variables).

4. **Run the app**:
    - Backend (Node.js):
      
      cd backend
      npm run dev
     

    - Frontend (React):
   
      cd frontend
      npm start
      

5. The app should now be running on `http://localhost:5173` for the frontend and `http://localhost:5000` for the backend.

---

## Environment Variables

The backend requires a `.env` file for sensitive information like the MongoDB connection URL and JWT secret key. Create a `.env` file in the backend directory 


Contributing
Contributions are welcome! Please follow these steps:

1.Fork the repository.
2.Create a new branch (git checkout -b feature/your-feature).
3.Make your changes and commit them (git commit -m 'Add some feature').
4.Push to the branch (git push origin feature/your-feature).
5.Create a new Pull Request.


### Tips:
- Replace `https://github.com/abhishek-mandavi/bookstore-app.git` with the actual URL of your GitHub repository.
- Add more details about your features and usage if necessary.



 
