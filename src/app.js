const express = require('express');
const app = express()
const cors = require('cors');

const router = require('./routes');
const db = require('./models/db')

//conecction db
try {
    app.use(db.myconnection(db.mysql, db.dbOptions,'single'))
    console.log(`Coneccion a ${db.dbOptions.database} exitosa `)
} catch (error) {
    console.log(error)
}


app.use(cors())
app.use(express.json());
app.use('/',router);
app.use('/',express.static('Frondend'));

app.listen(3000,()=>{
    console.log('SERVER RUNING ON PORT 3000...')
})