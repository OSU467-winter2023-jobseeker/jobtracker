const express = require('express');
const bodyParser = require('body-parser');
const google = require('googleapis');

const router = express.Router();
router.use(bodyParser.json());

const { CLIENT_ID, CLIENT_SECRET } = require('./constants');
const REDIRECT_URL = 'http://localhost:5001';
const OAUTH2CLIENT = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);