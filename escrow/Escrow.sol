// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract Escrow{
    //variables
    uint256 public timeOfDeployment;
    uint256 public unlockTime;

    //constructor
    constructor(uint256 _unlockTime) {
        timeOfDeployment = block.timestamp;
        unlockTime = _unlockTime;
    }

    //functions
    function sendFunds() external payable {
        payable(address(this)).transfer(msg.value);
    }

    function getBalance() external view returns(uint256){
       return address(this).balance;
    }

    function withdraw(address _wallet) external {
        //perform any check
        require(block.timestamp >= unlockTime, "You have to wait until unlock time");

        //send funds to '_wallet' address
        payable(_wallet).transfer(address(this).balance);
    }
    
    function currentTimeStamp() external view returns(uint256){
        //show current time in Unix timestamp
        return block.timestamp;
    }

    receive() external payable{

    }

}   

