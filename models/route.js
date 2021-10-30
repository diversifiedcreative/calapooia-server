const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    sourceType: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Route', routeSchema);
