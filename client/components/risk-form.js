Template.riskForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newRisk = {
      riskReference: event.currentTarget.riskreference.value
    };    

    // create the new risk
    Risks.insert(newRisk);

    // add to block chain
    web3.eth.defaultAccount = web3.eth.accounts[0];
    RiskContractInstance.storeNewRisk(event.currentTarget.contractversion.value, event.currentTarget.riskreference.value, event.currentTarget.contractType.value,
      event.currentTarget.businessClass.value, event.currentTarget.territory.value, event.currentTarget.riskvalue.value,
      {from: web3.eth.accounts[0], gas: 50000});

    // remove the inputs
    event.currentTarget.contractversion.value = ''
    event.currentTarget.riskreference.value = ''
     event.currentTarget.contractType.value = ''
    event.currentTarget.businessClass.value = ''
    event.currentTarget.territory.value = ''
    event.currentTarget.riskvalue.value = ''
  }

});

Template.riskForm.helpers({
  'contracts': function(){
        return Contracts.find();
    },
    'contractTypes': function(){
        return ContractTypes.find();
    } ,
    'businessClass': function(){
        return BusinessClass.find();
    },
    'territories': function(){
        return Territories.find();
    }
});