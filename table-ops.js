const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

const dynamodb = new AWS.DynamoDB();

// dynamodb.listTables({}, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// dynamodb.describeTable({
//     TableName: "id_notes"
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// })

dynamodb.createTable({
    TableName: "td_notes_id",
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            
        }
    ]
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
})