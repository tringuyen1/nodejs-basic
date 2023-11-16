const express = require('express');
const router = express.Router();
const { getHomePage, getSample, postCreateUser } = require('../controllers/homeController');


router.get('/', getHomePage);

router.get("/user", getSample);

router.post("/create-user", postCreateUser)

module.exports = router