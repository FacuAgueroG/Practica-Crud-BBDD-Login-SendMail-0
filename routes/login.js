'use strict'

const express = require("express");
const router = express.Router();
const modUser = require("../models/modUser");

router.get("/", (req, res) => {
    if (req.session.user) {
        const user = req.session.user
    res.render("secret", {user});
    }
    else {
        res.render("login");
    }
});

router.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect("/");
});

router.post("/", async (req, res) => {
    const { user, password } = req.body;
 
    const data = await modUser.getUser(user, password);
    if(data != undefined) {
        req.session.user = user
        res.render("secret", {user});
    } else {
        const message = "Credenciales incorrectas"
        res.render("login", {message});
    }
});



module.exports = router;