var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
      { name: 'Piyush', address: 'Pune' },
      { name: 'Yash', address: 'Nashik'},
      { name: 'xyz', address: 'Pune'},
      { name: 'abc', address: 'Mumbai'},
];
dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});