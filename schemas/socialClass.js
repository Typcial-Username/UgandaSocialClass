const { model, Schema } = require('mongoose')

const socialClassSchema = new Schema({
    _id: String,
    uganCoins: Number
})

const name = "socialClass";

module.exports = model[name] || model(name, socialClassSchema);
