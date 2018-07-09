const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Item =  mongoose.model('items', itemSchema);

function validateItem(items) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(2500).required(),
    });
    return Joi.validate(items, schema);
}

exports.Item = Item;
exports.validateItem = validateItem;