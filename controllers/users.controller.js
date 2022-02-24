const usersArray = require("../models/users.model");
const path = require("path");

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.addUser = (req, res) => {
    const userName = req.body.name;
    const userAge = req.body.age;
    const user = {
        userName,
        userAge
    };
    usersArray.push(user);

    res.status(201).json({
        success: true,
        usersArray
    });
};