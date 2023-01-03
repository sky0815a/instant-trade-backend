const mongoose = require('../db/connection');
const Schema = mongoose.Schema;



const ItemsSchema = new Schema(
    {
        type: String,
        cost: Number,
        STR: Number,
        DEX: Number
    }
);

const Items = mongoose.model('Items', ItemsSchema);

module.exports = Items