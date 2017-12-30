const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
         console.log("Unable to connect to MongoDb");
    }

    console.log('Connected to MongoDB server');
    
    const myDB = db.db('TodoApp');
    
    // myDB.collection('Todos').insertOne({
    //     text: "somthing to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    myDB.collection('Users').insertOne({
        name: "Khaled",
        age: 25,
        location: "Riyadh"
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert User', err);
        }
        console.log(JSON.stringify(result.ops));
    });
    
    db.close();
});