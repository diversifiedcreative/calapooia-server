const cors = require('cors');

const whitelist = ['http://calapooiariver.com', 'http://www.calapooiariver.com', 'https://calapooiariver.com', 'https://www.calapooiariver.com'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin'));
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);