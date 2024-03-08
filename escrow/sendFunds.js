//import Web3 module, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://rpc-mumbai.maticvigil.com");

async function deploy() {
  //set a wallet
  const wallet = provider.eth.accounts.wallet.add("YOUR_PRIVATE_KEY");

  //initialize contract
  const address = "";
  const myContract = new provider.eth.Contract(ABI, address);

  //send transaction to the network
  const txReceipt = await myContract.methods.sendFunds().send({
    from: wallet[0].address,
    value: 1, //wei
  });

  //show tx receipt
  console.log(txReceipt);
}

deploy();
