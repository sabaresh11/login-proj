const express = require('express');
const router = express.Router();
const allUserDetails = require('../userDetails');

router.get('/users',function(req,res){
    var listOfUsers = `<ul>`;
    allUserDetails.usersArray.forEach((obj) =>{
        listOfUsers += `<li>ID: ${obj.id} Name: ${obj.name}</li>`; 
    });
    listOfUsers += `</ul>`; 
    res.send(listOfUsers);
    //res.send(users);
});

router.get('/user/:id', function(req,res){
    const user = allUserDetails.usersArray.find(x => x.id === parseInt(req.params.id));
    res.send('Welcome '+user.name);
    console.log(body);
});

router.post('/newuser', function(req,res){
    const NewUser = {
        id: allUserDetails.usersArray.length + 1,
        name: req.body.name
    };
    allUserDetails.usersArray.push(NewUser);
    res.send('New user '+req.body.name+' has been added, User ID: '+allUserDetails.usersArray.length);
});


router.put('/user/:id', (req,res)=>{
    var user = allUserDetails.usersArray.find((user) => user.id === parseInt(req.params.id));
    user.name = req.body.name;
    res.send('Details Updated');
});

router.delete('/user/:id', (req,res)=>{
    var user = allUserDetails.usersArray.find((user) => user.id === parseInt(req.params.id));
    const userIndex = allUserDetails.usersArray.indexOf(user);
    allUserDetails.usersArray.splice(userIndex,1);
    res.send('User Removed!!!');

});
module.exports = router;