const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/valentines", (req, res) => {
  res.sendFile(__dirname + "/public/valentines.html");
})

app.get("/catalog-gifts", (req, res) => {
  res.sendFile(__dirname + "/public/catalog-gifts.html");
})

app.get("/catalog-history", (req, res) => {
  res.sendFile(__dirname + "/public/catalog-history.html");
})

app.get("/catalog-poems", (req, res) => {
  res.sendFile(__dirname + "/public/catalog-poems.html");
})

app.listen(4000, () => {
  console.log(`Holiday Server is Running!`)
});
