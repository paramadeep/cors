import express from 'express';
import cors from 'cors';
var app = express();
var PORT = 3001;

// app.use(cors)

app.get('/user', function (req, res) {
    console.log(req.headers)
    res.send("Redirected to User Page");
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});