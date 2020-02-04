const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

//using documentClient class here
const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.put({
//     TableName: 'id_notes',
//     Item: {
//         user_id: 'bb',
//         timestamp: 1,
//         title: 'my title',
//         content: 'changed content'
//     }
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// docClient.update({
//     TableName: 'id_notes',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     },
//     UpdateExpression: 'set #t = :t',
//     ExpressionAttributeNames: {
//         '#t': 'title'
//     },
//     ExpressionAttributeValues: {
//         ':t' : 'Updated title'
//     }

// }, (err, data) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
// })

// docClient.delete({
//     TableName: 'id_notes',
//     Key: {
//         user_id: 'bb',
//         timestamp: 1
//     }
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

docClient.batchWrite({
    RequestItems: {
        'id_notes': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'bb',
                        timestamp: 1
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '11',
                        timestamp: 2,
                        title: 'Title 11',
                        content: 'Content 11'
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: '22',
                        timestamp: 3,
                        title: 'Title 22',
                        content: 'Content 22'
                    }
                }
            }
        ]
    }
}, (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})