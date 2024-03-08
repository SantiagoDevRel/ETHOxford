//import Web3 module, and ABI
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://rpc-mumbai.maticvigil.com");

async function deploy() {
  //initialize contract
  const address = "";
  const myContract = new provider.eth.Contract(ABI, address);

  //make call
  const result = await myContract.methods.currentTimeStamp().call();

  //show tx receipt
  console.log("Current time stamp:", result);
}

deploy();
