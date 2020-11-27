pragma solidity ^0.4.23;

contract simpleSwitch {

    bool public state;
    uint public count;
    constructor() public {
      state = false;
      count = 0;
    }
    function flipSwitch() public {
      if (state) {
        state = false;
      } else {
        state = true;
      }
      count = count+1;
    }

}
