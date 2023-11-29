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
     const { email, name, city } = req.body;
     connection.query(
          `INSERT INTO Users (email, name, city) 
          VALUES (?,?,?)`, // ? lấy động dữ liệu
          [email, name, city],
          function (err, results) {
               console.log(results);
               res.send("create a new user success");
          }
     );

}

module.exports = {
     getHomePage,
     getSample,
     postCreateUser
};