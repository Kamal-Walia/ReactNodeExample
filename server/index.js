const express = require("express");
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 3010

const app = express();

const Logger = (req, res, next) => {
    console.log('KW101  - incoming request', req.url, req.method, next)
    const userName = 'KAMAL';
    const saltRounds = 5;
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(userName, salt, (err, hash) => {
            console.log("KW103",hash )
            req.userName = hash;
            bcrypt.compare("KAMAL", hash).then((result) => {
                console.log('Result', result)
            })
        })
    })
    next();
}

const Logger2 = (req, res, next) => {
    console.log('KW102  - incoming request', req.url, req.method, next)
    req.Myname = 'KAMAL';
    next();
}

app.use(Logger);
app.use(Logger2)

app.get('/greetings', (req, res) => {
    console.log(req.Myname);
    res.json({message: 'Hello From Server'});
});

app.post('/greetings2', (req, res) => {
    res.json({message: 'Hello From Server'});
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
