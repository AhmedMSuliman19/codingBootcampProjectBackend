// Import mongoose
const mongoose = require('mongoose');

const WeaponsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    }
);

const WeaponsModel =  mongoose.model('weapons', WeaponsSchema);
module.exports = WeaponsModel;
