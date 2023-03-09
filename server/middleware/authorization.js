const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const axios = require('axios');
const path = require('path');
const url = require('url');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const router = express.Router();
router.use(bodyParser.json());

// const REDIRECT_URL = 'http://localhost:5001/oauth';
const OAUTH2CLIENT = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    // REDIRECT_URL
);

/**
 * Use the Google API to verify the JWT of the request.
 * Structure and code based on the example from the 
 * 'Authenticate with a backend server' guide at
 * https://developers.google.com/identity/sign-in/web/backend-auth
 */
function verifyJwt (req) {
    token = '';

    if (req.headers.authorization !== undefined) {
        // remove the bearer suffix
        token = req.headers.authorization.substr(7);
    };

    const verificationParams = {
        'idToken': token,
        'audience': process.env.CLIENT_ID
    };

    return OAUTH2CLIENT.verifyIdToken(verificationParams)
        .then(ticket => {
            return ticket;
        })
        .catch(error => {
            throw new Error('Missing or invalid JWT');
        });
};

/**
 * Use the jsonwebtoken API to verify the token passed in
 * as a header field of the request.
 */
async function checkToken (req, res, next) {
    token = '';

    if (req.headers.authorization !== undefined) {
        // remove the bearer suffix
        token = req.headers.authorization.substr(7);
    };

    return jwt.verify(token, process.env.CLIENT_SECRET, (error, decoded) => {
        if (error) {
            throw error;
        } else {
            next();
        }
    });
};

/**
 * Use the jsonwebtoken API to decode the token passed in
 * as a header field of the request.
 * 
 * Returns the sub field of the token.
 */
async function getUserId (req) {
    token = '';

    if (req.headers.authorization !== undefined) {
        // remove the bearer suffix
        token = req.headers.authorization.substr(7);
    };

    return jwt.verify(token, process.env.CLIENT_SECRET, (error, decoded) => {
        if (error) {
            throw error;
        } else {
            return decoded.sub;
        }
    });
};

module.exports = {
    verifyJwt,
    checkToken,
    getUserId
};