const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
         console.log("Unable to connect to MongoDb");
    }
    console.log('Connected to MongoDB server');
   
    
    const myDB = db.db('TodoApp');


    //update itme
    myDB.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a48117e67add57128db2c12')
    },{
        $set: { completed: false}
    },{
        returnOriginal: false
    })
    .then((result) =>{
        console.log(result);
    }, (err) =>{
        console.log("Unable to delete data", err);
    });
    
    //db.close();
});