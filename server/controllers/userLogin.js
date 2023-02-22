const authorization = require('../middleware/authorization');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

function postUserLogin (req, res) {
    var userData = {};

    return authorization.verifyJwt(req)
        .then(payload => {
            userData = {
                'first_name': payload.given_name,
                'last_name': payload.family_name,
                'email': payload.email,
                'token': jwt.sign(
                    { sub: payload.sub },
                    process.env.CLIENT_SECRET,
                    { expiresIn: '1h' }
                )
            };

            res.set('Content-Type', 'application/json');
            res.status(200).json(userData);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
};

module.exports = { postUserLogin };