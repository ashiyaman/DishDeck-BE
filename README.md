# DishDeck

DishDeck is a powerful and user-friendly recipe organizer designed for food enthusiasts who want to store, manage, and explore their favorite recipes. Built using the MERN stack, DishDeck leverages Redux Toolkit for state management, ensuring a smooth and efficient user experience. The backend is powered by Node.js and Express.js, ensuring fast API responses, while MongoDB efficiently stores recipe data. With its well-structured project architecture, DishDeck is easy to maintain and extend with additional features in the future.

** Demo: ** [https://dish-deck-fe.vercel.app/](https://dish-deck-fe.vercel.app/)

## 🛠 Tech Stack

- **Frontend:** React, Redux, Redux Toolkit, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## ✨ Features

- 📜 Add and delete recipes
- 🔎 Search and filter recipes
- 📱 Responsive UI for all devices
- ⚡ Fast API responses with Express.js
- 💾 Efficient recipe storage using MongoDB

## 🚀 Installation

### Prerequisites
- ✅ Node.js & npm installed
- ✅ MongoDB installed and running

### Clone the Repository
```sh
git clone https://github.com/your-username/dishdeck.git
cd dishdeck
```

### Backend Setup
```sh
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm start
```

## ⚙️ Environment Variables
Create a `.env` file in the root directory of the backend with:
```sh
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

## 📌 API Endpoints

### Recipe Endpoints
| Method | Endpoint         | Description        |
|--------|-----------------|--------------------|
| GET    | `/api/recipes`  | Get all recipes   |
| POST   | `/api/recipes`  | Add a new recipe  |
| GET    | `/api/recipe/:id` | Get a single recipe |
| DELETE | `/api/recipes/:id` | Delete a recipe  |
