const { connection } = require("../config/database");

const getHomePage = (req, res) => {
     res.send('Hello World!') // hiển thị
}

const getSample = (req, res) => {
     let users = [];
     connection.query(
          'SELECT * FROM Users',
          function (err, results, fields) {
               users = results;
               // res.render("sample.ejs");
               res.send(JSON.stringify(users))
          }
     );
}

module.exports = {
     getHomePage,
     getSample
};