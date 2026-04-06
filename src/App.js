import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleAdd = () => {
    if (!newBook.title || !newBook.author) return;

    const book = {
      id: Date.now(),
      title: newBook.title,
      author: newBook.author
    };

    setBooks([...books, book]);
    setNewBook({ title: "", author: "" });
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "#eef2f7",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>
        Library Management System
      </h1>

      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "800px",
        margin: "auto",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Book Title"
            value={newBook.title}
            onChange={(e) =>
              setNewBook({ ...newBook, title: e.target.value })
            }
            style={{ flex: 1, padding: "12px", borderRadius: "8px" }}
          />

          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) =>
              setNewBook({ ...newBook, author: e.target.value })
            }
            style={{ flex: 1, padding: "12px", borderRadius: "8px" }}
          />

          <button
            onClick={handleAdd}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px"
            }}
          >
            Add Book
          </button>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "20px auto" }}>
        {filteredBooks.map((book) => (
          <div key={book.id} style={{
            background: "white",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <div>
              <h3>{book.title}</h3>
              <p style={{ color: "gray" }}>by {book.author}</p>
            </div>

            <button
              onClick={() => handleDelete(book.id)}
              style={{
                background: "#ef4444",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px"
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;