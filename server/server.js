const login = require('./routes/login');
const applications = require('./routes/applications');
const contacts = require('./routes/contacts');
const users = require('./routes/users');
const skills = require('./routes/skills');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/login', login);
app.use('/applications', applications);
app.use('/contacts', contacts);
app.use('/users', users);
app.use('/skills', skills);

app.listen(port, () => (
    console.log(`Server started on port ${port}`)
    ))
