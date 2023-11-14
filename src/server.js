const express = require('express')
const path = require("path");
const app = express() // app express
const port = 3000 // port
app.set("views", path.join(__dirname, './views/'));
app.set("vieư engine", "ejs");
// khai báo route
app.get('/', (req, res) => {
     res.send('Hello World!') // hiển thị
})

app.get("/user", (req, res) => {
     // res.send("user");
     res.render("sample.ejs");
});

app.listen(port, () => {
     console.log(`Example app listening on port ${port}`) // cho chạy server
})