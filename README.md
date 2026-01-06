Food Menu Management System (MERN Stack)

This project is a simple Food Menu Management System built using the MERN stack. It demonstrates end-to-end CRUD operations using React for the frontend, Express and Node.js for the backend, and MongoDB for data storage.

The project is designed for educational purposes to explain how the MERN stack works in a simple and clear manner.

Features

Add food items

View food menu

Delete food items

Persistent data storage using MongoDB

Clean separation of frontend and backend

Axios-based API communication

Tech Stack

Frontend: React (Vite)

Backend: Node.js, Express.js

Database: MongoDB Atlas

HTTP Client: Axios

Project Structure
mern_demo/
 ├─ client/    # React frontend
 └─ server/    # Express backend

Getting Started
1️⃣ Clone the Repository
git clone https://github.com/josephdaniel8805/mern-food-menu-demo.git
cd mern-food-menu-demo

2️⃣ Backend Setup
cd server
npm install


Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run the backend server:

npm run dev

3️⃣ Frontend Setup

Open a new terminal:

cd client
npm install
npm run dev

Running the Application

Frontend runs on:
http://localhost:5173

Backend runs on:
http://localhost:5000

Make sure both frontend and backend servers are running simultaneously.

How It Works (MERN Flow)

React frontend sends HTTP requests using Axios →
Express backend handles APIs →
MongoDB stores food data →
Updated data is sent back to the frontend.

Project Status

✅ Frontend completed
✅ Backend completed
✅ MongoDB connected
✅ CRUD operations implemented
✅ Full MERN integration done

Purpose

This project is created as a simple MERN stack demonstration for learning and teaching purposes. It avoids unnecessary complexity while clearly showing how frontend, backend, and database communicate in a real application.
