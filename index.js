const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT

const welcome = require('./routes/welcome');
const allUsers = require('./routes/users');

app.use(express.json());
app.use('/', welcome);
app.use('/api/user', allUsers);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));







//console.log('getting users',allUsers);
/* app.get('/', (req,res) => {
res.send('<h1>Hello World!!</h1>');
});  

app.get('/api/user', (req,res) =>{
   res.send(users);
}); 

app.get('/api/user/:id', (req,res) =>{
   const user = users.user.find(x => x.id === parseInt(req.params.id));
   res.send('Welcome '+user.name);
});

app.post('/api/user', (req,res) => {
   const NewUser = {
       id: users.user.length + 1,
       name : req.body.name
   };
   users.user.push(NewUser);
   res.send('New user '+req.body.name+' has been added, User ID: '+users.user.length);
});   */






