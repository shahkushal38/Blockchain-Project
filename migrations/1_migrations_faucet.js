// const { artifacts } = require("truffle");
// eslint-disable-next-line no-undef
var MyContract = artifacts.require("Faucet");

module.exports = function (deployer) {
    deployer.deploy(MyContract);
};