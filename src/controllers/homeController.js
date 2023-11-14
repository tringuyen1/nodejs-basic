
const getHomePage = (req, res) => {
     res.send('Hello World!') // hiển thị
}

const getSample = (req, res) => {
     res.render("sample.ejs");
}

module.exports = {
     getHomePage,
     getSample
};