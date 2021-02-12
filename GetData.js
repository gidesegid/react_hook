
require('dotenv/config');
let AWS=require('aws-sdk')
let awsConfig={
    "region":process.env.region,
    "endpoint":process.env.endpoint,
    "accessKeyId":process.env.accessKeyId,
    "secretAccessKey":process.env.secretAccessKey
}
AWS.config.update(awsConfig)
let docClient=new AWS.DynamoDB.DocumentClient();
let shippingPossibilitiesForARangeOfDays=function(tableName,key){
    let params={
        TableName:tableName,
        Key:{
            "id":key
        }
    }
    docClient.get(params,function(err,data){
        let workingDaysPerCountry={}
        if(err) return console.log("error"+JSON.stringify(err,null,2))
        workingDaysPerCountry.country=data.Item.id
        workingDaysPerCountry.holidays=data.Item.holidays
    })
    
}
let SupplierPerShippingPossibilities=function(tableName,key){
    let params={
        TableName:tableName,
        Key:{
            "id":key
        }
    }
    docClient.get(params,function(err,data){
       let shippingPossibilityPerSupplier={}
        if(err) return console.log("error"+JSON.stringify(err,null,2));
          
        shippingPossibilityPerSupplier.id=data.Item.id;
        shippingPossibilityPerSupplier.carrier=data.Item.carriers
        shippingPossibilityPerSupplier.address=data.Item.address
    })
    
}
let SinglePossibilityPerDeliveryDayPerCarrier=function(tableName,key){
    let params={
        TableName:tableName,
        Key:{
            "id":key
        }
    }
    docClient.get(params,function(err,data){
       let SinglePossibilityPerDeliveryDayPerCarrierData={}
        if(err) return  console.log("error"+JSON.stringify(err,null,2));
        SinglePossibilityPerDeliveryDayPerCarrierData.country=data.Item.countries;
        SinglePossibilityPerDeliveryDayPerCarrierData.id=data.Item.id;
    })
}

//uncomment below functions to work.........

// shippingPossibilitiesForARangeOfDays("countries","fr")
// SupplierPerShippingPossibilities("suppliers","KN")
// SinglePossibilityPerDeliveryDayPerCarrier("carriers","DHP")