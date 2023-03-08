const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config()
const { Sequelize } = require("sequelize");
const { books } = require("./models");
const db = process.env.DB
const sequelize = new Sequelize(
  `${db}`
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const bookshelf = await books.findAll();
  console.log(bookshelf);
  res.send(bookshelf);
});

app.post("/", async (req, res) => {
  await books.create({
    title: req.body.title,
    description: req.body.description,
    edition: req.body.edition,
    isbn: req.body.isbn,
    author: req.body.author,
    pages: req.body.pages,
    rating: req.body.rating,
    reviews: req.body.reviews,
  });
  let newBook = await books.findAll({
    where: {
      title: req.body.title,
      author: req.body.author,
      edition: req.body.edition,
      isbn: req.body.isbn,
      rating: req.body.rating,
    },
  });
  res.send(newBook);
});

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
