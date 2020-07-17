// Import mongoose
const mongoose = require('mongoose');

const MapsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    }
);

const MapsModel =  mongoose.model('maps', MapsSchema);
module.exports = MapsModel;
