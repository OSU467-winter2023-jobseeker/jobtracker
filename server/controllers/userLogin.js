const express = require('express');
const authorization = require('../middleware/authorization');

function postUserLogin (req, res) {
    const authorizationURL = authorization.getAuthorizationURL();
    
    // Store the Google auth URL in the response header.
    res.location(authorizationURL); // User will redirect to Google auth page
    res.status(303).end();
}

module.exports = { postUserLogin };