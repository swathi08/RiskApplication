pragma solidity ^0.4.0;
contract Risk{
    
    uint riskID;
    
    struct risk{
    string contractVersion;
    string riskReference;
    string contractType;
    string businessClass;
    string territory;
    string riskValue;
    }
    
    risk public s;

    mapping(uint => risk) public Risks;

    event NewRiskAdded();
    
    function storeNewRisk(string contractVersion, string riskReference, string contractType, string businessClass, string territory, string riskValue)public{
    Risks[riskID+1] = risk(contractVersion, riskReference, contractType, businessClass, territory, riskValue);
        riskID++;
        NewRiskAdded();
    }
    
    function getRiskCount() constant returns (uint){
        return riskID;
    }
    
    function getRiskReference(uint riskID) constant returns (string) {
       return Risks[riskID].riskReference;
    }
}