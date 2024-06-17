const React = require('react');
const express = require("express");
const ReactDOMServer = require("react-dom/server");
const bcrypt = require('bcrypt');
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const { User } = require('../../db/models');
const { Tasks } = require('../../db/models');
const { Theory } = require('../../db/models');


const apiRouter = express.Router();

apiRouter.post('/api/registration', async (req, res) => {
    const { email, nickname, password1, password2, } = req.body
    const currentuser = await User.findOne({ where: { email } })
    const hashedPassword = await bcrypt.hash(password1, 10)

    if (!currentuser && password1 === password2) {
        const dbRes = await User.create({ username: nickname, email: email, password: hashedPassword, avatar: "default" })
        req.session.user_id = { id: dbRes.id, nick: dbRes.nickname }
        res.status(201).json(JSON.parse(JSON.stringify(dbRes)))
    } else {
        res.status(403).json({ message: "User already exists" })
    }
})

apiRouter.post('/api/auth', async (req, res) => {
    const { email, password } = req.body
    const currentuser = await User.findOne({ where: { email } })
    const passconnect = bcrypt.compare(password, currentuser.password);

    if (currentuser && passconnect) {
        const dbRes = await User.create({ username: nickname, email: email, password: hashedPassword, avatar: "default" })
        req.session.user_id = { id: dbRes.id, nick: dbRes.nickname }
        res.status(201).json(JSON.parse(JSON.stringify(dbRes)))
    } else {
        res.status(403).json({ message: "User already exists" })
    }
})

apiRouter.get('/api/tasks', async (req, res) => {
    const taskslist = await Tasks.findAll({});
    if (taskslist) {
        res.status(201).json(JSON.parse(taskslist))
    } else {
        res.status(403).json({ message: "No tasks for your filters" })
    }
})

apiRouter.get('/api/theory', async (req, res) => {
    const theorylist = await Theory.findAll({});
    if (theorylist) {
        res.status(201).json(JSON.parse(theorylist))
    } else {
        res.status(403).json({ message: "No theory for your filters" })
    }
})

apiRouter.get('/api/profilestaticks', async (req, res) => {
    const { id } = req.body;
    const User = await User.findOne({ where: { id } });
    if (User.jwt === req.session.cookie) {
        res.status(201).json(JSON.parse(User))
    } else {
        res.status(403).json({ message: "No permission" })
    }
})

apiRouter.get('/api/allusers', async (req, res) => {

    const Userslist = await User.findAll({
        attributes: ['nickname', 'jspoints', 'totalpoints']
    })
    if (Userslist) {
        res.status(201).json(JSON.parse(User))
    }
    else {
        res.status(403).json({ message: "No users or error" });
    }
})


module.exports = apiRouter;