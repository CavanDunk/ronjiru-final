const GenerateAvatar = artifacts.require("./GenerateAvatar.sol");

module.exports = function(deployer) {
    deployer.deploy(GenerateAvatar);
};