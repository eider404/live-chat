const {Router} = require('express')
const router = Router()

const messegesController = require('./controllers/messagesController')

router.route('/')
    .post(messegesController.singup)

router.route('/chat')
    .get(messegesController.allMessages)
    .post(messegesController.sendMessage)


module.exports = router;