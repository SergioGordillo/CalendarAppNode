const { response } = require('express');

const register = (req, res = response) => {
    res.json({
        ok: true,
        msg: "Register"
    })
}

const login = (req, res = response) => {
    res.json({
        ok: true,
        msg: "Login"
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