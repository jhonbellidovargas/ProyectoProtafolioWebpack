const fs = require('fs');

fs.watchFileSync('./.env', `API=${process.env.API}\n`);