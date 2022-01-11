const { response } = require('express');
const User = require ("../models/User"); 

const register = async (req, res = response) => {

    // const { name, email, password } = req.body; 

    try {

        const user = new User(req.body); 
        await user.save();
    
        res.status(201).json({
            ok: true,
            msg: "Register"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "There was an error. Please, try it again later."
        })
    }


}

const login = (req, res = response) => {

    const { email, password } = req.body; 

    res.status(201).json({
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