const authorization = require('../middleware/authorization');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const Pool = require('../db/db');
const pool = Pool.pool;
const { getUser, insertUsers } = require('../controllers/usersController');

/**
 * Verify the authorization header for the request and either
 * create a new account for the user or simply log them in.
 */
async function postUserLogin (req, res) {
    var userData = {};

    return authorization.verifyJwt(req)
        .then(async ticket => {
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
            const getUserData = await getUser(userData.user_id);
            if (typeof getUserData !== 'undefined') {
                console.log('User already exists');
                return;
            } else {
                // Add user to database
                console.log('User does not exist, adding to database')
                const fullName = userData.first_name + ' ' + userData.last_name;
                const data = {
                    'user_id': userData.user_id,
                    'full_name': fullName,
                    'email': userData.email
                }
                return insertUsers(data);
            }
            
        })
        .then(() => {
            res.set('Content-Type', 'application/json');
            res.status(200).json(userData);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error.message);
        });
};

module.exports = { 
    postUserLogin
};