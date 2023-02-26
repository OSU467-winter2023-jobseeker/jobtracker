const db = require("./queries");
const login = require('./routes/login');
const applications = require('./routes/applications');
const contacts = require('./routes/contacts');

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

// app.get('/', (request, response) => {
//     response.json({ info: 'Job Tracker Page' })
//   })

app.get("/contact", db.getContacts)
app.post("/contact", db.createContacts)
app.put("/contact/:id", db.updateContact)
app.delete("/contact/:id", db.deleteContact)
app.get("/users", db.getUsers)
app.post("/user", db.insertUser)
app.put("/user/:id", db.updateUser)
app.delete("/user/:id", db.deleteUser)

app.listen(PORT, () => (
    console.log(`Server started on port ${PORT}`)
    ))
