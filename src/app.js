const express = require('express');
const app = express()

const router = require('./routes');

app.use(express.json());
app.use('/',router)

app.listen(3000,()=>{
    console.log('SERVER RUNING ON PORT 3000...')
})