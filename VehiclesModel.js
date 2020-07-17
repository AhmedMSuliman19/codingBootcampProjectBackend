// Import mongoose
const mongoose = require('mongoose');

const VehiclesSchema = new mongoose.Schema(
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

const VehiclesModel =  mongoose.model('vehicles', VehiclesSchema);
module.exports = VehiclesModel;
