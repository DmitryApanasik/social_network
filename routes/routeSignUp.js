const validationSignUp = require('../validation/validationSignUp');
const signUpService = require('../services/signUpService');

module.exports = function (app) {
    app.route(/^(?!api)/)
        .get(update);

    app.route('/api/build/bundle.js')
        .get(getBundle);

    app.route('/api/signup')
        .post(registration);
};

function getBundle(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    res.sendFile('bundle.js', {root: 'src/public/build'});
}

function update(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    res.sendFile('index.html', {root: 'src/public/'});
}

function registration(req, res) {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log('validation');
    let errors = validationSignUp(req);

    if (!errors) {
        res.status(200).json();
    } else {
        res.status(400).json({errors: errors});
    }
    console.log('before email');
    return signUpService.checkEmail(req.body.email)
}