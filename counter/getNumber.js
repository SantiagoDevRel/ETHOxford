//import Web3 module, and ABI
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://rpc-mumbai.maticvigil.com");

async function deploy() {
  //initialize contract
  const address = "0xB9433C87349134892f6C9a9E342Ed6adce39F8dF";
  const myContract = new provider.eth.Contract(ABI, address);

  //make call
  const result = await myContract.methods.getNumber().call();

  //show tx receipt
  console.log("Current Number:", result);
}

deploy();
