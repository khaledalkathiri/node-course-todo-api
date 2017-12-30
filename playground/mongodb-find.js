const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
         console.log("Unable to connect to MongoDb");
    }
    console.log('Connected to MongoDB server');
   
    
    const myDB = db.db('TodoApp');

    //to find all itmes
    myDB.collection('Todos').find().toArray()
    .then((docs) =>{
        console.log("All todo items: ")
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log("Unable to fitch data", err);
    });

    //to find item with specific codition
    myDB.collection('Todos').find({completed: false}).toArray()
    .then((docs) =>{
        console.log("Not completed todo items: ")        
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log("Unable to fitch data", err);
    });


    //to find itme with specific id
    myDB.collection('Todos').find({_id: new ObjectID('5a48117e67add57128db2c12')}).toArray()
    .then((docs) =>{
        console.log("Item with id 5a48117e67add57128db2c12: ")        
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log("Unable to fitch data", err);
    });
    
    //db.close();
});