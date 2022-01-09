const { Router } = require('express');
const router = Router(); 
const { check } = require("express-validator");

const { register, login, renew } = require("../controllers/auth");
const { fieldsValidator } = require('../middlewares/fields-validator');

router.post(
    "/new",
    [
        check("name", "You need a name to register").not().isEmpty(),
        check("email", "You need an email to register").isEmail(),
        check("password", "You need a password with at least 6 letters to register").isLength({min:6}),
        fieldsValidator
    ], 
    register);

router.post(
    "/",
    [
        check("email", "You need an email to login").isEmail(),
        check("password", "You need a password to login").isLength({min:6}),
        fieldsValidator
    ], 
    login)

router.get("/renew", renew)

module.exports = router; 