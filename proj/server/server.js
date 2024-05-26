require('@babel/register');

require('dotenv').config();

const express = require("express");

const { sequelize } = require('./db/models');

const serverConfig = require("./config/ServerConfig");

const PORT = 3000;
const app = express();

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const sessionConfig = {
    store: new FileStore(), // настройка файлового хранилища
    name: "user_sid", // имя куки для хранения id сессии
    secret: process.env.SESSION_SECRET ?? "asfsdg3434ijbdfg", // для шифрования id сессии
    resave: false, // не пересохранять куку при каждом запросе
    saveUninitialized: false, // не создавать сессию без записи в req.session
    cookie: {
        maxAge: 1000 * 60 * 60 * 12, // срок действия куки в миллисекундах
        httpOnly: true, // javascript не может обратиться к куке
    },
};

app.use(session(sessionConfig));

sequelize.authenticate();

serverConfig(app);

app.listen(PORT, () => {
    console.log("Server started");
})
