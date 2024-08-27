const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
 

module.exports = buildModule("RCCStakeModuleV7",(m) => { 

  const deployer = '0x0CC36130d54955D1F49cB82B52E196b2D6580314'; 
 
  const rccToken = '0x4d63d98FDbB3c8eEB7BcFa997e1574B570Da40f9';
  const startBlock = 0;
  const endBlock = 1000000000;
  const rccPerBlock = 1;

    const rccStakeContract = m.contract("RCCStake", [], {
      from: deployer,
    });
  

    try {
       m.call(rccStakeContract, "initialize", [rccToken, startBlock, endBlock, rccPerBlock], {
        from: deployer
      });
      console.log("Initialization succeeded");
    } catch (error) {
      console.error("Initialization failed:", error);
    }



    // try {

    //   m.call(rccStakeContract, "addPool", [address(0x0), 1, 1, 1, false], {
    //     from: deployer
    //   })

    //   console.log("Pool added successfully")

    // } catch(error){
    //   console.error("Initialization failed:", error);
    // }

    // function addPool(address _stTokenAddress, uint256 _poolWeight, uint256 _minDepositAmount, uint256 _unstakeLockedBlocks,  bool _withUpdate) 
 

  return { rccStakeContract }; 
});