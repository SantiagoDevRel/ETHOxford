//import Web3, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://rpc-mumbai.maticvigil.com");

async function donate() {
  //setup a wallet
  const wallet = provider.eth.wallet.add("YOUR_PRIVATE_KEY");

  //initialize contract
  const address = "0xcAc6701c2a401E8F839668E18D2683B22113566F";
  const myContract = new provider.eth.Contract(ABI, address);

  //send tx
  const txReceipt = await myContract.methods.donate().send({
    from: wallet[0].address,
    value: 100000000000000000, //wei
  });

  //show tx receipt
  console.log("Tx hash:", txReceipt.transactionHash);
}

donate();
