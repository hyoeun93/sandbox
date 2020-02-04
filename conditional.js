const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

const docClient = new AWS.DynamoDB.DocumentClient();

docClient.put({
    TableName: 'id_notes',
    Item: {
        user_id: 'ABC',
        timestamp: 1,
        title: 'New TItle',
        content: 'New Content'
    },
    ConditionExpression: '#t <> :t',
    ExpressionAttributeNames: {
        '#t': 'timestamp'
    },
    ExpressionAttributeValues: {
        ':t': 1
    }
},(err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})