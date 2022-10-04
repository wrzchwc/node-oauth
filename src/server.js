const https = require('https');
const fs = require('fs');
const app = require('./app');
require('dotenv').config();

const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');

const server = https.createServer({key, cert}, app);

server.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});
