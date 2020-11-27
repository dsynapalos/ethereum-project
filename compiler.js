const path = require('path');
const fs = require('fs');
const solc = require('solc');

const pathtocontract = path.resolve(__dirname,'contract.sol');
const contract = fs.readFileSync(pathtocontract,'utf8');

// console.log(solc.compile(contract, 1));
module.exports = solc.compile(contract, 1).contracts[':simpleSwitch'];
