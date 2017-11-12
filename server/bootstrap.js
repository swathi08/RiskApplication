// run this when the meteor app is started
Meteor.startup(function() {

  // data for contract versions
  var contractVersions = [
  	{text: 'Zurich Market'},
  	{text: 'London Market'}
  ];

  // if there are no polls available create sample data
  if (Contracts.find().count() === 0) {

    // loop over and insert into database
    _.each(contractVersions, function(contract) {
      Contracts.insert(contract);
    });

  }

    // data for contract types
  var contractTypes = [
  	{text: 'Direct Insurance'},
  	{text: 'Excess of loss reinsurance'},
  	{text: 'Facultative reinsurance'},
  	{text: 'Proportional treaty'}
  ];

  // if there are no polls available create sample data
  if (ContractTypes.find().count() === 0) {

    // loop over and insert into database
    _.each(contractTypes, function(type) {
      ContractTypes.insert(type);
    });

  }

     // data for business class
  var businessClass = [
  	{text: 'Aviation'},
  	{text: 'Marine'},
  	{text: 'Terrorism'},
  	{text: 'Energy'}
  ];

  // if there are no polls available create sample data
  if (BusinessClass.find().count() === 0) {

    // loop over and insert into database
    _.each(businessClass, function(bclass) {
      BusinessClass.insert(bclass);
    });

  }  

       // data for business class
  var territories = [
  	{text: 'Worldwide'},
  	{text: 'Asia Pacific'},
  	{text: 'North America'},
  	{text: 'South America'}
  ];

  // if there are no polls available create sample data
  if (Territories.find().count() === 0) {

    // loop over and insert into database
    _.each(territories, function(territory) {
      Territories.insert(territory);
    });

  }  
});