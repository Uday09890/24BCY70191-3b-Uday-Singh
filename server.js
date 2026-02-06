const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction" },
    { id: 2, title: "Clean Code", author: "Robert C. Martin", category: "Programming" }
];

app.get("/", (req, res) => {
    const search = req.query.search || "";

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    res.render("index", { books: filteredBooks, search });
});

app.post("/add", (req, res) => {
    const { title, author, category } = req.body;

    if (title && author && category) {
        books.push({
            id: Date.now(),
            title,
            author,
            category
        });
    }

    res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
