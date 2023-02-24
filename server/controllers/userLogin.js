const authorization = require('../middleware/authorization');
const queries = require('../queries.js');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');


/**
 * Verify the authorization header for the request and either
 * create a new account for the user or simply log them in.
 */
function postUserLogin (req, res) {
    var userData = {};

    return authorization.verifyJwt(req)
        .then(ticket => {
            userData = {
                'first_name': ticket.getPayload().given_name,
                'last_name': ticket.getPayload().family_name,
                'email': ticket.getPayload().email,
                'user_id': ticket.getPayload().sub,
                'token': jwt.sign(
                    { sub: ticket.getPayload().sub },
                    process.env.CLIENT_SECRET,
                    { keyid: ticket.getEnvelope().kid, expiresIn: '24h' }
                )
            };
            // if (queries.getUser(userData.user_id)) {
            //     // User has already registered.
            //     return;
            // } else {
            //     // Add user to database
            //     const fullName = userData.first_name + ' ' + userData.last_name;
            //     return queries.insertUser(userData.user_id, fullName, userData.email);
            // }
            return;
        })
        .then(() => {
            res.set('Content-Type', 'application/json');
            res.status(200).json(userData);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
};

module.exports = { postUserLogin };