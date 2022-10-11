pragma solidity >= 0.8.7;

import "./Oracle.sol";

contract Diesal {
    Oracle private oracle;
    address private oracleAddr;

    constructor(address _oracleAddr){
        oracleAddr = _oracleAddr;
        oracle = Oracle(_oracleAddr);
    }
   

    function getDiesalPrice()external view returns(uint price){
        price = oracle.DiesalPrice();
    }
}