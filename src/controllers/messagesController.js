


const singup = (req, res) => {
    res.send('sing up')
}

const singin = (req, res) => {
    res.send('sing in')
}





const allMessages = (req, res) => {
    res.send('all Messages - get')
}

const sendMessage = (req, res) => {
    res.json(req.body)
}

module.exports = {
    singup,
    singup,
    allMessages,
    sendMessage,
}