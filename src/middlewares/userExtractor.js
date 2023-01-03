const jwt = require("jsonwebtoken")
require('dotenv').config();

module.exports = async(req, res, next) => {
    const token = req.headers.authorization;
        
    try {
        decodedToken = await jwt.verify(token, process.env.SECRET)

    } catch (error) {
        return res.status(401).json({status: 401, mensaje: "token inexistente o expirado"})
    }
    //console.log(decodedToken.id)
    req.body.idUser = decodedToken.id
    
    next();

}