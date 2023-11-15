require('dotenv').config()
const express = require('express')
const app = express() // app express
const configViewEngine = require("./config/viewEngine")
const webRoutes = require("./routes/web")
const { connection } = require('./config/database')


const port = process.env.PORT || 8001; // port
const hostName = process.env.HOST_NAME;

configViewEngine(app);


// khai báo route
app.use("/v1", webRoutes)

connection.query(
     'SELECT * FROM Users',
     ['Page', 45],
     function (err, results, fields) {
          console.log("check results >>>>", results);
     }
);

app.listen(port, hostName, () => {
     console.log(`Example app listening on port ${port}`) // cho chạy server
})