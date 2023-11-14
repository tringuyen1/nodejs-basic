require('dotenv').config()
const express = require('express')
const path = require("path");
const app = express() // app express
const port = process.env.PORT || 8001; // port
const hostName = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, './views/'));
app.set("vieư engine", "ejs");

// config static files
app.use(express.static(path.join(__dirname, 'public')));

// khai báo route
app.get('/', (req, res) => {
     res.send('Hello World!') // hiển thị
})
app.get("/user", (req, res) => {
     // res.send("user");
     res.render("sample.ejs");
});

app.listen(port, hostName, () => {
     console.log(`Example app listening on port ${port}`) // cho chạy server
})