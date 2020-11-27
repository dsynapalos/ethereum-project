var Web3 = require('web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

//ABI
var SimpleContract = web3.eth.contract([],"")

function flipswitch(){
  var swtich = simplecontract.flipSwitch.call();
  console.log("Switch flipped");
};

function getstate(){
  var curstate = simplecontract.state.call();
  console.log("State: " + curstate);
};

function getcount(){
  var curcount = simplecontract.count.call();
  console.log("Count: " + curcount);
};
