const Crypto = require('crypto-js')
const fs = require('fs');
console.log(Crypto.SHA256(fs.readFileSync('./block')).toString())
