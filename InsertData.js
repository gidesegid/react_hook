let AWS=require('aws-sdk')
let awsConfig={
    "region":process.env.region,
    "endpoint":process.env.endpoint,
    "accessKeyId":process.env.accessKeyId,
    "secretAccessKey":process.env.secretAccessKey
}
AWS.config.update(awsConfig)
let docClient=new AWS.DynamoDB.DocumentClient();
let myInput=[
    {
      "id": "KN",
      "address": {
        "country": "nl"
      },
      "carriers": [
        "PNL",
        "RTG",
        "DHP",
        "DHP_EXPRESS"
      ]
    },
    {
      "id": "TMB",
      "address": {
        "country": "nl"
      },
      "holidays": [
        "2021-05-07",
        "2021-05-08"
      ],
      "carriers": [
        "PNL",
        "DPD",
        "DHP"
      ]
    },
    {
      "id": "FRS",
      "address": {
        "country": "fr"
      },
      "holidays": [
        "2021-05-09"
      ],
      "carriers": [
        "DHP"
      ]
    }
  ]
let save=function(TableName){
    for(key in myInput){
        let params={
            TableName:TableName,
            Item:myInput[key]
        }
        docClient.put(params,function(err,data){
            if(err) return console.log("error"+JSON.stringify(err,null,2));
            console.log("inserted successfully");
        })
    }
}
//uncomment below function to work............

// save(TableName)
