const express = require ('express');
const app = express();
const db = require('./DB');
const bodyparser = require('body-parser');
app.use(bodyparser.json());



app.get('/',(req,res)=> {
    res.send('Good Morning Jay');
})

const formRouter = require('./routers/form');
const travelrouter = require('./routers/travel');
app.use('/form',formRouter);
app.use('/trip',travelrouter);




app.listen(3000,()=> {
    console.log('server is Running on a port 3000');
})