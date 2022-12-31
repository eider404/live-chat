const bcrypt = require('bcrypt');
const { use } = require('../routes');
const crypto = require("crypto");

const singup = async(req, res) => {
    const user = req.body
    
    const salt = await bcrypt.genSalt(10); 
    user.password = await bcrypt.hash(user.password, salt);
    
    //no es lo correcto pero es muy poco probable que se repita el id
    user.id = crypto.randomBytes(8).toString("hex");

    req.getConnection((err, conn)=>{
        if(err) { return res.send(err)}

        conn.query("INSERT INTO User set ?", [user], (err, rows)=>{
            if(err) { return res.send(err) }
            res.json(user);
        })
        
    })
}

const singin = async(req, res) => {
    const user = req.body
    
    const salt = await bcrypt.genSalt(10); 
    user.password = await bcrypt.hash(user.password, salt);
    
    //no es lo correcto pero es muy poco probable que se repita el id
    user.id = crypto.randomBytes(8).toString("hex");

    req.getConnection((err, conn)=>{
        if(err) { return res.send(err)}

        conn.query("INSERT INTO User set ?", [user], (err, rows)=>{
            if(err) { return res.send(err) }
            res.json(user);
        })
        
    })
}









const allMessages = (req, res) => {
    res.send('all Messages - get')
}

const sendMessage = (req, res) => {
    res.json(req.body)
}

module.exports = {
    singup,
    singin,
    allMessages,
    sendMessage,
}