const bcrypt = require('bcrypt')


const login = async(req, res) => {
    const user = req.body
    
    const salt = await bcrypt.genSalt(10); 
    user.password = await bcrypt.hash(user.password, salt);
    
    //guardar a la DB
}





const allMessages = (req, res) => {
    res.send('all Messages - get')
}

const sendMessage = (req, res) => {
    res.json(req.body)
}

module.exports = {
    login,
    allMessages,
    sendMessage,
}