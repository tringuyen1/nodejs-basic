require('dotenv').config()
const express = require('express')
const app = express() // app express
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")


const port = process.env.PORT || 8001; // port
const hostName = process.env.HOST_NAME;

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

configViewEngine(app);


// khai báo route
app.use("/", webRoutes)

app.listen(port, hostName, () => {
     console.log(`Example app listening on port ${port}`) // cho chạy server
})