const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    company: {
        type: String,
        required: true
    }
},
    {
        toJSON: {
            transform: function (doc, ret) {
                delete ret.__v;

            },
        },
        timestamps: true
    });

module.exports = mongoose.model('Product', ProductSchema);
