let AWS=require('aws-sdk')
let awsConfig={
    "region":process.env.region,
    "endpoint":process.env.endpoint,
    "accessKeyId":process.env.accessKeyId,
    "secretAccessKey":process.env.secretAccessKey
}
AWS.config.update(awsConfig)
let docClient=new AWS.DynamoDB.DocumentClient();
let remove=function(TableName,key){
    let params={
        TableName:TableName,
        Key:{
            "id":key
        }
    };
    docClient.delete(params,function(err,data){
        if(err) return console.log("error"+JSON.stringify(err,null,2));
        console.log("deleted successfully");
    })
}
// uncomment below function to work.......

// remove(TableName,key)
