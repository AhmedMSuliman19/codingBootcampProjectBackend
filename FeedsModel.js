// Import mongoose
const mongoose = require('mongoose');

const FeedsSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        hashtags: {
            type: Array
        },
        date: {
            type: Date,
            default: Date.now
        },
        likes: {
            type: Array  
        }
    }
);

const FeedsModel =  mongoose.model('feeds', FeedsSchema);
module.exports = FeedsModel;
