//import Web3, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://rpc-mumbai.maticvigil.com");

async function getBalance() {
  //initialize contract
  const address = "0xcAc6701c2a401E8F839668E18D2683B22113566F";
  const myContract = new provider.eth.Contract(ABI, address);

  //make call
  const result = await myContract.methods.getBalance().call();

  //show result
  console.log("balance:", result);
}

getBalance();
