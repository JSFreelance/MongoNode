/**
 * A Simple NodeJS connection example to a MongoDB database,
 * using the MongoDB driver for NodeJS
 *
 */
    /*
    * Initialize vars
    * MongoClient The MongoDB driver object for NodeJS
     * ConnectionString, contains the data needed for open the connection to the
     * MongoDB server: See the MongoDB connection String URI Format: https://docs.mongodb.org/v3.0/reference/connection-string/
     * Json_Query: The query we'll use, written on JSON format, the empty JSON makes a Full Collection query.
    * */
var MongoClient = require('mongodb').MongoClient;
var ConnectionString = "mongodb://Your_Connection_Data";
var Json_Query = {}; // Write here your query on JSON Format.

MongoClient.connect(ConnectionString,
    function(err, db){
    if(!err){
        console.log("You are connected...");
        var Query_result = db.collection('post').find(Json_Query);
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