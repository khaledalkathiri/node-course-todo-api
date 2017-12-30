const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
         console.log("Unable to connect to MongoDb");
    }
    console.log('Connected to MongoDB server');
   
    
    const myDB = db.db('TodoApp');

    //delete Many items
    myDB.collection('Todos').deleteMany({text: "eat lunch"})
    .then((result) =>{
        console.log("All todo items: ")
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) =>{
        console.log("Unable to delete data", err);
    });


    //delete specific item
    myDB.collection('Todos').findOneAndDelete({completed: false})
    .then((result) =>{
        console.log("not completed items are deleted: ")
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) =>{
        console.log("Unable to delete data", err);
    });

    
    //db.close();
});