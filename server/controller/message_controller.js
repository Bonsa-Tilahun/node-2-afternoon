const messages = []
let id = 0

module.exports = {
    createMessage: (req, res) => {
        const { text, time } = req.body
        const newMessage = {
            id,
            text,
            time
        }
        messages.push(newMessage)
        id++
        res.status(200).send(messages)
    },
    readMessage: (req, res) => {
        res.status(200).send(messages)
    },
    updateMessage: (req, res) => {
        const { id } = req.params
        const { text } = req.body
        const index = messages.findIndex(message => message.id === +id)
        index === -1 ? res.status(404).send("Message not found") :
            messages[index] = {...messages[index], text }
        res.status(200).send(messages)
    },
    deleteMessage: (req, res) => {
        console.log(req.params)
        const { id } = req.params
        console.log(+id)
        const index = messages.findIndex(message => message.id === +id)
        console.log(messages[index])
        index === -1 ? res.status(404).send("Message not found") :
            messages.splice(index, 1)
        res.status(200).send(messages)
    }
}