const login = require('./routes/login');
const applications = require('./routes/applications');
const contacts = require('./routes/contacts');
const users = require('./routes/users');
const skills = require('./routes/skills');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET, PUT, POST, DELETE, OPTIONS'
}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Used for app deployment 
// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   })

app.use('/login', login);
app.use('/applications', applications);
app.use('/contacts', contacts);
app.use('/users', users);
app.use('/skills', skills);

app.listen(PORT, () => (
    console.log(`Server started on port ${PORT}`)
    ))
