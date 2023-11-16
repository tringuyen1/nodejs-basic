const { connection } = require("../config/database");

const getHomePage = (req, res) => {
     return res.render("home.ejs");
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

const postCreateUser = (req, res) => {
     console.log("check >>>:", req.body)
     res.send("create a new user")
}

module.exports = {
     getHomePage,
     getSample,
     postCreateUser
};