# PassOP 🔐 – Your own password manager

PassOP is a full-stack password manager application built with **React**, **Express**, and **MongoDB**.  
It allows users to securely store, view, edit, and delete login credentials through a clean and intuitive interface.

This project focuses on proper CRUD handling, state management, and backend data persistence.

---

## 🚀 Features

- Add, edit, and delete saved passwords
- Persistent storage using MongoDB
- Password masking with copy-to-clipboard functionality
- Safe edit logic (prevents accidental data loss)
- Responsive and minimal UI

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- UUID

---

## 📁 Project Structure


PassOP - Your own password manager/  
├── src/ # Frontend source code  
├── public/ # Static assets  
├── backend/ # Express server & database logic  
└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

`git clone https://github.com/maverickO4/PassOP-Password-Manager.git`

`cd PassOP-Password-Manager`



2️⃣ Backend setup

`cd backend`

`npm install`


Create a .env file in backend/:

`MONGODB_URI=mongodb://localhost:27017`

`PORT=3000`


Start the backend server:

`node server.js`



3️⃣ Frontend setup

`cd ..`

`npm install`

`npm run dev`


## 🧠 Key Learnings

1. Proper separation of Add vs Edit logic
2. Safe handling of delete operations
3. Difference between frontend state and database persistence
4. REST API integration with React
5. Debugging real-world full-stack issues

## 📌 Future Improvements

1. Password encryption
2. User authentication
3. Search and filter functionality
4. Cloud database deployment
5. Production build & hosting


## 👨‍💻 Author

Sayantan Das  
Bachelor of Computer Applications (BCA) student.

GitHub: https://github.com/maverickO4
