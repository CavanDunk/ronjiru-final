pragma solidity ^0.5.0;

contract GenerateAvatar {

  uint keep;
  struct Avatar
  {
    uint id;
    string name;
    string class;
    //uint256 rng;
  }

  constructor() public{
    createAvatar("A","Common"); //1
    createAvatar("B","Common"); //2
    createAvatar("C","Common"); //3
    createAvatar("D","Common"); //4
    createAvatar("E","Uncommon"); //5
    createAvatar("F","Uncommon"); //6
    createAvatar("G","Uncommon"); //7
    createAvatar("H","Rare"); //8
    createAvatar("I","Rare"); //9
    createAvatar("Z","Special"); //10
  }

  mapping (address => Avatar) public avatarOwner;
  //mapping (address => Avatar) avatarz;

  Avatar[] public avatars;
  address[] public work;

  function createAvatar(string memory _name, string memory _class) public
  {

    uint _id = index()+1;
    avatars.push(Avatar({id:_id, name:_name, class:_class})) - 1;
    //avatarOwner[_address].id = index();
    //avatarOwner[_address].name = _name;
    //avatarOwner[_address].class = _class;
    //avatars[_address].rng = _rng;
  }
  function createAvatar(uint _id,string memory _name, string memory _class) public
  {


    avatars.push(Avatar({id:_id, name:_name, class:_class})) - 1;
    //avatarOwner[_address].id = index();
    //avatarOwner[_address].name = _name;
    //avatarOwner[_address].class = _class;
    //avatars[_address].rng = _rng;
  }
  function index() view public returns(uint)
  {
    return avatars.length;
  }
  function rngAvatar() public payable returns(uint,string memory, string memory)
  {
    uint rng = random();
    // if(avatarOwner[msg.sender].id != 0)
    //{
    //    createAvatar(avatarOwner[msg.sender].id,avatarOwner[msg.sender].name,avatarOwner[msg.sender].class);
    // everytime an account that already has an avatar uses the rngavatar the avatar is placed back into the array
    //}
    avatarOwner[msg.sender].id = avatars[rng].id;
    avatarOwner[msg.sender].name = avatars[rng].name;
    avatarOwner[msg.sender].class = avatars[rng].class;
    work.push(msg.sender) - 1;
    //deleteAndFix(rng) //takes the randomly generated Id, deletes it and re adjust the array to remove gaps.
    return(rng,avatarOwner[msg.sender].name,avatarOwner[msg.sender].class); //Returns rng avatar name & class

  }
  function getAvatar()public view returns(uint,string memory,string memory)
  {
    return(avatarOwner[msg.sender].id,avatarOwner[msg.sender].name,avatarOwner[msg.sender].class);
  }
  function random() public view returns(uint)
  {
    //return(uint(blockhash(block.number-1))%90 + 10); //Take random number from 0-9 using the block.number
    uint ran = uint(keccak256(abi.encode(now,msg.sender,keep)))%index()+1;
    return ran;
  }
  function deleteAndFix(uint _rng) public {
    delete avatars[_rng];
    for (uint i = _rng; i<avatars.length-1; i++){
      avatars[i] = avatars[i+1];
    }
    //delete array[array.length-1];
    avatars.length--;
    //return avatars;
  }
  function setString(string memory _text) {
    str = _text;
  }
}
