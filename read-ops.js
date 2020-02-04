const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: 'id_notes',
//     Key: {
//         user_id: '11',
//         timestamp: 2
//     }
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// docClient.query({
//     TableName: 'id_notes',
//     KeyConditionExpression: "user_id = :ud",
//     ExpressionAttributeValues: {
//         ":ud": "11"
//     } 
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// docClient.scan({
//     TableName: 'id_notes',
//     FilterExpression: "cat = :cat",
//     ExpressionAttributeValues: {
//         ":cat": "general"
//     } 
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

docClient.batchGet({
    'id_notes': {
        Keys: [
          {
             user_id: '11',
             timestamp: 2
          }
        ]
      }
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
})