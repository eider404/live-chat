const bcrypt = require('bcrypt');
const crypto = require("crypto");
const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async(req, res) => {
    const user = req.body

    if(!(user.username && user.password)){
        return res.status(401).json({status: 401, mensaje: "Username y password son nesesarios"})
    }

    const salt = await bcrypt.genSalt(10); 
    user.password = await bcrypt.hash(user.password, salt);
    
    //no es lo correcto pero es muy poco probable que se repita el id
    user.id = crypto.randomBytes(8).toString("hex");

    req.getConnection((err, conn)=>{
        if(err) { return res.send(err)}

        conn.query("INSERT INTO User set ?", [user], (err, rows)=>{
            if(err) { return res.send(err) }
            return res.status(200).json({status: 200, mensaje: "Usuario Registrado"})
            
        })  
    })
}

const signin = async(req, res) => {
    const {username, password} = req.body
    
    //verifica si el usuario y la contrasena es valido
    req.getConnection((err, conn)=>{
        conn.query("SELECT * FROM User WHERE username = ?", [username], async(err, rows)=>{

            try {
                user = rows[0];

                passIsValid = await bcrypt.compare(password, user.password);
                if(!passIsValid){
                    throw new Error()
                }

                const token = jwt.sign( {id: user.id}, process.env.SECRET, { expiresIn: 60 * 60});

                res.json({status: 200, mensaje: "Usuario Logueado" ,user: username, idUser: user.id , token: token })

            } catch (error) {
                return res.status(401).json({status: 401, mensaje: "Username o password invalida"})
            }
            /*
            user = rows[0];
            
            if(!user){
                return res.status(401).json({status: 401, mensaje: "Username o password invalida"})
            }

            passIsValid = await bcrypt.compare(password, user.password);
            if(!passIsValid){
                return res.status(401).json({status: 401, mensaje: "Username o password invalida"})
            }

            //JWT
            const token = jwt.sign( {id: user.id}, process.env.SECRET, { expiresIn: 60 * 60});

            res.json({status: 200, user: username, token: token })
            */
        })
    }) 
}


//---------------------------------


const allMessages = (req, res) => {
    const idUser = req.body
    req.getConnection((err, conn)=>{
        conn.query("SELECT Message.id, Message.text, Message.date, Message.userId_fk, User.username FROM Message INNER JOIN User ON Message.userId_fk = User.id;", async(err, rows)=>{
            res.json(rows)
        })
    }) 
}

const sendMessage = (req, res) => {
    const message = req.body
    
    message.id = crypto.randomBytes(8).toString("hex");
    
    //Time UTC
    const date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    message.date = date

    req.getConnection((err, conn)=>{
        conn.query("INSERT INTO Message set ?", [message], (err, rows)=>{
            //res.json(message);
            res.status(200).json({status: 200, mensaje: "Mensaje Enviado"})
        }) 
    })
}

module.exports = {
    signup,
    signin,
    allMessages,
    sendMessage,
}
