const EthAtomicSwap = artifacts.require('../contracts/EthAtomicSwap.sol')

module.exports = (deployer) => {
  deployer.deploy(EthAtomicSwap);
}

