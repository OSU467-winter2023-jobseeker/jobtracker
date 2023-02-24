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
async function checkToken (req) {
    token = '';

    if (req.headers.authorization !== undefined) {
        // remove the bearer suffix
        token = req.headers.authorization.substr(7);
    };

    return jwt.verify(token, process.env.CLIENT_SECRET), (error, decoded) => {
        if (error) {
            throw error;
        } else {
            return;
        }
    }
};

/**
 * Use the Google API to create a URL that contains a request
 * page for the user's Google account data.
 */
function getAuthorizationUrl() {
    const authorizationUrl = OAUTH2CLIENT.generateAuthUrl({
        'access_type': 'online',
        'scope': 'profile',
        'include_granted_scopes': true
    });

    return authorizationUrl;
};

/**
 * Use the Google API to request a token from the authorization
 * Send a POST request to the Google token authorization page
 * using the code recently received from the server
 */
function getServerToken(req) {
    // Uses the URL API to extract the oauth code, rather than the 
    // deprecated query method suggested by the Google API docs.
    // API doc: https://developer.mozilla.org/en-US/docs/Web/API/URL_API
    const returnedUrl = url.parse(req.url, true).query;

    return OAUTH2CLIENT.getToken(returnedUrl.code)
        .then(response => {
            OAUTH2CLIENT.setCredentials({ response });
            return response.tokens;
        })
        .catch(error => {
            throw error;
        });
};


module.exports = {
    getAuthorizationUrl,
    getServerToken,
    verifyJwt,
    checkToken
};