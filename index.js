//import express library
const express = require("express")

//create express instance
const app = express()

//use static files found in "public"
app.use(express.static(__dirname + "/public"))

//sends users to the index.html file when applied to '/' URL
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

//route for valentines page valentines.html
// /valentines = path to access the page
app.get("/valentines", (req, res) => {
  res.sendFile(__dirname + "/public/valentines.html");
})

//route for gifts catalog page
// /catalog-gifts = path to access the page
app.get("/catalog-gifts", (req, res) => {
  res.sendFile(__dirname + "/public/catalog-gifts.html");
})

//route for history catalog page
// /catalog-history = path to access the page
app.get("/catalog-history", (req, res) => {
  res.sendFile(__dirname + "/public/catalog-history.html");
})

//route for gifts catalog page
// /catalog-poems = path to access the page
app.get("/catalog-poems", (req, res) => {
  res.sendFile(__dirname + "/public/catalog-poems.html");
})

//starts the server on port 4000
//logs message "holiday server is running" to confirm the server is running
app.listen(4000, () => {
  console.log(`Holiday Server is Running!`)
});
