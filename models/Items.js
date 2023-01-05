const mongoose = require('../db/connection');
const Schema = mongoose.Schema;



const ItemsSchema = new Schema(
    {
        Game: String,
        PW: String,
        type: String,
        cost: Number,
        STR: Number,
        DEX: Number,
        Vital: Number,
        Energy: Number,
        Faster_Cast_Rate: Number,
        All_Skill_LV: Number
    }
);

const Items = mongoose.model('Items', ItemsSchema);

module.exports = Items