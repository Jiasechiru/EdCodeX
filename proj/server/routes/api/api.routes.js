const React = require('react');
const express = require("express");
const ReactDOMServer = require("react-dom/server");
const bcrypt = require('bcrypt');
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const { User } = require('../../db/models');

const apiRouter = express.Router();

apiRouter.post('/api/registration', async (req, res) => {
    const { email, nickname, password1, password2, } = req.body
    const currentuser = await User.findOne({ where: { email } })
    const hashedPassword = await bcrypt.hash(password1, 10)

    if (!currentuser) {
        const dbRes = await User.create({ username: nickname, email: email, password: hashedPassword, avatar: "default" })
        req.session.user_id = { id: dbRes.id, nick: dbRes.nickname }
        res.status(201).json(JSON.parse(JSON.stringify(dbRes)))
    } else {
        res.status(403).json({ message: "User already exists" })
    }
})


module.exports = apiRouter;