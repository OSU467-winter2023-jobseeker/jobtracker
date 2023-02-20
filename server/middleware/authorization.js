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

const REDIRECT_URL = 'http://localhost:5001/oauth';
const OAUTH2CLIENT = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    REDIRECT_URL
);


/**
 * Use the Google API to verify the JWT of the request.
 * Structure and code based on the example from the 
 * 'Authenticate with a backend server' guide at
 * https://developers.google.com/identity/sign-in/web/backend-auth
 */
function verifyJwt (req) {
    var idToken = '';
    // if (req.body.jwt !== undefined) {
    //     // remove the bearer suffix
    //     idToken = req.body.jwt.substr(7);
    //     console.log(idToken);
    // }

    verificationParams = {
        'idToken': req.body.jwt,
        'audience': process.env.CLIENT_ID
    };

    return OAUTH2CLIENT.verifyIdToken(verificationParams)
        .then(ticket => {
            console.log(ticket);
            return ticket.getPayload(); 
        })
        .then(payload => {
            return payload['sub'];
        })
        .catch(error => {
            throw new Error('Missing or invalid JWT');
        });
};

function loginAfterVerified(jwt) {
    jwt.sign(jwt);
}

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

/**
 * Send a GET request to the Google People API to request
 * the names field.
 */
function getUserInfo(token) {
    const request = {
        'method': 'get',
        'url': 'https://people.googleapis.com/v1/people/me?personFields=names',
        'headers': { 'Authorization': 'Bearer ' + token.access_token }
    };

    return axios(request)
        .then(response => {
            return response.data.names[0];
        })
        .catch(error => {
            throw error;
        });
};

module.exports = {
    getAuthorizationUrl,
    getServerToken,
    getUserInfo,
    verifyJwt
};