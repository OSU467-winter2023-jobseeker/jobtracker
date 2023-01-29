const express = require('express');
const app = express();
const PORT = 5001;


app.get("/api", (req, res) => {
    res.json({"testData": ['testOne', "testTwo", "testThree", "testFour"]})
})

app.listen(PORT, () => (
    console.log(`Server started on port ${PORT}`)
    ))
