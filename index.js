const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const booksDB = {
  1: { id: 1, title: "Book One", author: "Author One" },
  2: { id: 2, title: "Book Two", author: "Author Two" }
};

app.get('/api/v1/:book_id', (req, res) => {
  const bookId = parseInt(req.params.book_id, 10);
  const book = booksDB[bookId];
  
  if (book) {
    return res.json(book);
  }
  
  return res.status(404).json({ detail: "Book not found" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
