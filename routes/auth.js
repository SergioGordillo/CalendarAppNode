const { Router } = require('express');
const router = Router(); 

const { register, login, renew } = require("../controllers/auth");

router.post("/new", register);

router.post("/", login)

router.get("/renew", renew)

module.exports = router; 