# DishDeck

DishDeck is a powerful and user-friendly recipe organizer designed for food enthusiasts who want to store, manage, and explore their favorite recipes. Built using the MERN stack, DishDeck leverages Redux Toolkit for state management, ensuring a smooth and efficient user experience. The application allows users to add, edit, delete, and categorize recipes based on different cuisines, ingredients, or meal types. With a search and filter functionality, users can quickly find specific recipes based on keywords or categories. The app also provides a favorites feature, allowing users to save their most-loved recipes for quick access. DishDeck is designed with a responsive UI, making it accessible from desktops, tablets, and mobile devices. The backend is powered by Node.js and Express.js, ensuring fast API responses, while MongoDB efficiently stores recipe data. With its well-structured project architecture, DishDeck is easy to maintain and extend with additional features in the future.

## 🛠 Tech Stack

- **Frontend:** React, Redux, Redux Toolkit, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

## ✨ Features

- 📜 Add, edit, and delete recipes
- 🏷 Categorize recipes by cuisine, ingredients, or meal type
- 🔎 Search and filter recipes
- ⭐ Save favorite recipes
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
| PUT    | `/api/recipe/:id` | Update a recipe  |
| DELETE | `/api/recipes/:id` | Delete a recipe  |

### Category Endpoints
| Method | Endpoint         | Description        |
|--------|-----------------|--------------------|
| GET    | `/api/categories`  | Get all categories   |
| POST   | `/api/categories`  | Add a new category  |
| GET    | `/api/category/:id` | Get a single category |
| PUT    | `/api/category/:id` | Update a category  |
| DELETE | `/api/categories/:id` | Delete a category  |

## 🤝 Contributing
Feel free to fork the repository and create a pull request.

## 📜 License
This project is licensed under the **MIT License**.

