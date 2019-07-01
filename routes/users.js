const express = require('express');
const router = express.Router();
const users = require('../users');

router.get('/',function(req,res){
    var listOfUsers = `<ul>`;
    users.user.forEach((obj) =>{
        listOfUsers += `<li>ID: ${obj.id} Name: ${obj.name}</li>`; 
    });
    listOfUsers += `</ul>`;
    res.send(listOfUsers);
    //res.send(users);
});


router.get('/:id', function(req,res){
    const user = users.user.find(x => x.id === parseInt(req.params.id));
    res.send('Welcome '+user.name);
});

router.post('/newuser', function(req,res){
    const NewUser = {
        id: users.user.length + 1,
        name: req.body.name
    };
    users.user.push(NewUser);
    res.send('New user '+req.body.name+' has been added, User ID: '+users.user.length);
});

module.exports = router;