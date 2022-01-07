const { response } = require('express');

const register = (req, res = response) => {

    const { name, email, password } = req.body; 

    if ( name.length <5) {
        return res.status(400).json({
            ok: false,
            msg: "The name must have as minimum 5 letters"
        });
    }

    res.json({
        ok: true,
        msg: "Register",
        name,
        email,
        password
    })
}

const login = (req, res = response) => {

    const { email, password } = req.body; 

    res.json({
        ok: true,
        msg: "Login",
        email,
        password
    })
};

const renew = (req, res = response) => {
    res.json({
        ok: true,
        msg: "Renew token"
    })
}

module.exports = {
    register,
    login,
    renew
}