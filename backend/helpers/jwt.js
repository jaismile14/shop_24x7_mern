const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [           
            { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS','POST','PUT','DELETE'] },
            { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS','POST','PUT','DELETE'] },
            { url: /\/api\/v1\/orders(.*)/, methods: ['GET', 'OPTIONS', 'POST','PUT'] },
            { url: /\/api\/v1\/homepage(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/v1\/admin(.*)/, methods: ['GET', 'OPTIONS','POST','PUT','DELETE'] },
            { url: /\/api\/v1\/users(.*)/, methods: ['GET', 'OPTIONS', 'POST','PUT'] },
            { url: /\/public\/upload(.*)/, methods: ['GET', 'OPTIONS'] },
            `${api}/users/login`,
            `${api}/users/register`,
           
            //`${api}/users/`
            // { url: /(.*)/ },
        ]
    });
}

async function isRevoked(req, payload, done) {
    if (!payload.isAdmin) {
        done(null, true);
    }

    done();
}

module.exports = authJwt;
