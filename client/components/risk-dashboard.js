Template.riskDashboardForm.events({


});

Template.riskDashboardForm.helpers({
  'risks': function(){
        return Risks.find();
    }
});