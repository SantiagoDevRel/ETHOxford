// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Coffee{
    //variables
    address public myWallet;

    //constructor
    constructor(address _myAddress) {
        //set the owner of the contract
        myWallet = _myAddress;
    }

    //functions
    function donate() external payable {
        //access 'this' contract address
        address this_contract = (address(this)); 

        //transfer value to 'this' contract
        payable(this_contract).transfer(msg.value);
    }

    function withdraw() external {
        //optional
        require(msg.sender == myWallet, "You are not Santiago");
        
        //fetch balance from this contract
        uint256 currentBalance = address(this).balance;

        //transfer
        payable(myWallet).transfer(currentBalance);
    }

    function getBalance() external view returns(uint256){
        //fetch balance from this contract
        return address(this).balance;
    }

    // Receive function to accept Ether
    receive() external payable {}

}   

