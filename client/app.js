Meteor.startup(function () {
  Session.setDefault("templateName", "riskDashboardForm")
});

Template.body.helpers({
	template_name: function(){
    return Session.get("templateName")
  }
});

Template.body.events({
/*  "click .riskdashboard": function() {
    Session.set("templateName", "riskDashboardForm");
  },*/
  "click .newrisk": function() {
     Session.set("templateName", "riskForm");
  },
        "click .riskdashboard": function (e, template) {
        var displayRiskReferences = [];
        var riskCount = RiskContractInstance.getRiskCount({from: web3.eth.accounts[0], gas: 50000});
        console.log("Risk count "+ riskCount)
        for (var i = 1; i <= riskCount; i++) {
			var x = RiskContractInstance.getRiskReference(i,{from: web3.eth.accounts[0], gas: 50000})
			console.log("returned from blockchain "+x)
          displayRiskReferences.push(x);
          console.log("display value "+ displayRiskReferences[i]);
        }
         Session.set("templateName", "riskDashboardForm");
    }
});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});