pragma solidity >=0.7.0 <0.9.0;
import "./Owner.sol";

contract Oracle is Owner{

    address private source;
    uint public DiesalPrice;

    function setReliableSource(address _source) external  isOwner{
        source = _source;
    }

    function setPrice(uint _price)external {
        require(msg.sender==source,"Your not allowed to change price");
        DiesalPrice = _price;
    }
 
}
