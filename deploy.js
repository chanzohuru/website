'use strict';
// Get the enviroment variables.

const path = require('path');
// const dotenvPath = path.join(__dirname, '..', '.env');
// require('dotenv').config({ path: dotenvPath });

require('dotenv').config();
const SftpClient = require('ssh2-sftp-client');

console.log(path.join(__dirname, 'public'));

const config = {
    host: process.env.SFTP_HOST,
    username: process.env.SFTP_USERNAME,
    password: process.env.SFTP_PASSWORD,
    port: process.env.SFTP_PORT || 22
};

async function main() {
    const client = new SftpClient('upload-prod');
    const src = path.join(__dirname, 'public');
    const dst = '/home1/chanzohuru/public_html';

    try {
        await client.connect(config);
        client.on('upload', info => {
            console.log(`Listener: Uploaded ${info.source}`);
        });
        let rslt = await client.uploadDir(src, dst);
        return rslt;
    } finally {
        client.end();
    }
}

main()
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(`main error: ${err.message}`);
    });
