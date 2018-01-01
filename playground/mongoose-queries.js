const {mongoose} = require("./../server/db/mongose.js");
const {Todo} = require("./../server/models/todo.js");
const {User} = require("./../server/models/user.js");


var id = "5a492a244c320c377c6a8f08";


// Todo.find({
//     _id : id
// }).then( (todo) =>{
//     console.log("Todos", todo);
// });

// Todo.findOne({
//     _id : id
// }).then( (todo) =>{
//     console.log("Todo", todo);
// });

// Todo.findById(id).then( (todo) =>{
//     if(!todo){
//         return console.log("id not found");
//     }
//     console.log("Todo", todo);
// });

User.findById("5a492d4a99794537f3921add").then( (user) =>{
    if(!user){
        return console.log("unable to find user");
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (err) =>{
    console.log("error is ", err);
});