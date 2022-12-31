const {Router} = require('express')
const router = Router()

const messegesController = require('./controllers/messagesController')

router.route('/singup')
    .post(messegesController.singup)

router.route('/singin')
    .post(messegesController.singin)

router.route('/chat')
    .get(messegesController.allMessages)
    .post(messegesController.sendMessage)


module.exports = router;