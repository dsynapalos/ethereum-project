const path = require(path);
const fs = require(fs);
const solc = require(solc);

const pathtocontract = path.resolve(__dirname,'contract.sol');
const contract = fs.readFileSync(pathtocontract,'utf8');

var compiled = solc.compile(contract, 1);
console.log(compiled);
