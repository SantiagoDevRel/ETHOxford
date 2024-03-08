//import Web3 module, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");
const BYTECODE = require("./bytecode.json");

//initialize provider
const provider = new Web3("https://rpc-mumbai.maticvigil.com");

async function deploy() {
  //set a wallet
  const wallet = provider.eth.accounts.wallet.add("YOUR_PRIVATE_KEY");

  //initialize contract
  const myContract = new provider.eth.Contract(ABI);

  //create contract deployer
  const deployer = myContract.deploy({
    data: "0x" + BYTECODE,
    arguments: ["TIME_STAMP"],
  });

  //send transaction to the network
  const txReceipt = await deployer.send({ from: wallet[0].address });

  //show tx receipt
  console.log(txReceipt.options.address);
}

deploy();
