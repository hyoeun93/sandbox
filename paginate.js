const async = require("async");
const _ = require("underscore");
const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-2'});

const docClient = AWS.DynamoDB.DocumentClient();

var startKey = [];
var results = [];
var pages = 0;

async.doWhilst(
    //iteratee function
    (callback) => {
        let params = {
            TableName: 'id_notes',
            Limit: 2
        };

        if(!_.isEmpty(startKey)) {
            params.ExclusiveStartKey = startkey;
        }

        docClient.scan(params, (err, data) => {
            if(err) {
                console.log(err);
                callback(err, {})
            } else {
                if(typeof data.LeastEvalutedKey !== "undefined") {
                    startKey = data.LeastEvalutedKey;
                } else {
                    startKey = [];
                }
                if(!_.isEmpty(data.Items)) {
                    results = _.union(results, data.Items);
                }
                pages++;
                callback(null, results); 
            }
        })
    },
    //truth test
    () => {
        if(_.isEmpty(startKey)) {
            return false;
        } else {
            return true; 
        }
    },

    //callback
    (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data);
            console.log("Item Count", data.length);
            console.log("pages", pages);
        }
    }
    

)