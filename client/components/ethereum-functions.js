// get the latest block
web3.eth.filter('latest').watch(function(e, blockHash) {
    if(!e) {
        web3.eth.getBlock(blockHash, function(e, block){
            Session.set('latestBlock', block);
        });
    }
});



// Check if new risk has been added
RiskContractInstance.NewRiskAdded({}).watch(function(e, log) {
    if(!e) {
    	 alert("Risk has been successfully processed")
    }
});
