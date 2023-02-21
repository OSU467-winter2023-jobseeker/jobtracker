const authorization = require('../middleware/authorization');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

function postUserLogin (req, res) {
    var userToken = req.body.jwt;
    var userData = {};

    return authorization.verifyJwt(req)
        .then(id =>{
            console.log(id);
            return authorization.getUserInfo(userToken);
        })
        .then(userInfo => {
            console.log(userInfo);
            userData = userInfo;
            return;
        })
        .then(() => {
            return;
        })
        .catch(error => {
            res.status(500).json(error.message);
        })
};

module.exports = { postUserLogin };