//import Web3 module, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://rpc-mumbai.maticvigil.com");

async function deploy() {
  //set a wallet
  const wallet = provider.eth.wallet.add("YOUR_PRIVATE_KEY");

  //initialize contract
  const address = "0xB9433C87349134892f6C9a9E342Ed6adce39F8dF";
  const myContract = new provider.eth.Contract(ABI, address);

  //send transaction to the network
  const txReceipt = await myContract.methods.increase().send({ from: wallet[0].address });

  //show tx receipt
  console.log(txReceipt);
}

deploy();
