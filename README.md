📚 Library Management System (Node.js + Express)
📌 Project Description

This is a simple Library Management System built using Node.js, Express.js, and EJS.

The application allows users to:

Add new books

Search books by title

View book list

Delete books

This project demonstrates basic CRUD operations, routing, server-side rendering, and GitHub project management.

🚀 Features

📖 Add Book

🔍 Search Book (by title)

❌ Delete Book

📋 View All Books

🖥 Server-side rendering using EJS

📂 Clean GitHub structure with .gitignore

🛠 Technologies Used

Node.js

Express.js

EJS (Embedded JavaScript Templates)

Body-Parser

HTML5

CSS3

Git & GitHub

📂 Project Structure
library-node/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
│
├── views/
│   └── index.ejs
│
└── public/
    └── style.css

⚙ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
node server.js

4️⃣ Open in Browser
http://localhost:3000

📸 Application Flow

User opens homepage

User can add book using form

Books are stored in memory (array)

User can search books

User can delete books

Page refreshes automatically after actions

🧠 How It Works

server.js handles routing and logic

index.ejs renders dynamic content

body-parser processes form submissions

Express routes:

GET / → Display books

POST /add → Add book

GET /delete/:id → Delete book

⚠ Limitations

Data is stored in memory (not database)

Data resets when server restarts

🔮 Future Improvements

Add MongoDB database

Add Edit/Update functionality

Add Authentication (Login/Register)

Convert to REST API

Deploy on Render / Railway

👨‍💻 Author

Uday Singh
B.Tech Student
Node.js Project Submission

📄 License

This project is for educational purposes only.
