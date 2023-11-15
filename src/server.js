require('dotenv').config()
const express = require('express')
const app = express() // app express
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")


const port = process.env.PORT || 8001; // port
const hostName = process.env.HOST_NAME;

configViewEngine(app);


// khai báo route
app.use("/v1", webRoutes)


app.listen(port, hostName, () => {
     console.log(`Example app listening on port ${port}`) // cho chạy server
})