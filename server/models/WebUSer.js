const {default: mongoose} = require("mongoose")

const webUSerSchema = new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:String
})

const WebUser = mongoose.model("WebUSer",webUSerSchema)

module.exports = {
    WebUser
}