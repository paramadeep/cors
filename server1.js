import express  from 'express';
var app = express();
var PORT = 3000;

app.use(express.static('public'))

// Without middleware
app.get('/first', function (req, res) {
    console.log(req.headers)
    res.redirect('http://prabhu.com:3001/user');
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});