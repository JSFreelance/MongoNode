/**
 * A Simple NodeJS connection example to a MongoDB database,
 * using the MongoDB driver for NodeJS
 *
 */

var MongoClient = require('mongodb').MongoClient;
var ConnectionString = "mongodb://Your_Connection_data";

MongoClient.connect(ConnectionString,
    function(err, db){
    if(!err){
        console.log("You are connected...");
        var Query_result = db.collection('post').find({"content":"abc"});
        Query_result.each(
            function(err, doc){
                if(doc != null){
                    console.dir(doc);
                }
            }
        );
    }else{
        console.log("Connection Crashed...");
    }
});