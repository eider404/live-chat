const {Router} = require('express')
const router = Router()

const messegesController = require('./controllers/messagesController')
const userExtractor = require("./middlewares/userExtractor")

router.route('/sign-up')
    .post(messegesController.signup)

router.route('/sign-in')
    .post(messegesController.signin)

router.route('/chat')
    .get(userExtractor, messegesController.allMessages)
    .post(messegesController.sendMessage)


module.exports = router;