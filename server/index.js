const express = require('express')
const msgCtrl = require('./controller/message_controller')
const app = express()
const PORT = 3001

app.use(express.json())

app.listen(PORT)
app.get('/api/messages', msgCtrl.readMessage)
app.post('/api/messages', msgCtrl.createMessage)
app.put('/api/messages/:id', msgCtrl.updateMessage)
app.delete('/api/messages/:id', msgCtrl.deleteMessage)