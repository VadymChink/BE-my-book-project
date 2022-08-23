const {Schema, model} = require("mongoose");

const BookSchema = new Schema({
        name: {
                type: String,
                required: true,
                trim: true,
        },
        writer: {
                type: String,
                required: true,
                trim: true,
        },
        price: {
                type: Number,
        },
        description: {
                type: String,
                required: true,
        },
        avatar: {
                type: String,
                required: true,
        },
        photos: {
                type: Array,
                required: true,
        },
        idProduct: {
                type: Number,
        },
        language: {
                type: String,
                required:true,
        },
        originalName: {
                type: String,
        },
        originalLanguage: {
                type:String,
        },
        cover: {
                type:String,
                required:true,
        },
        pages: {
                type: Number,
                required: true,
        },
        publishingHouse: {
                type: String,
                required: true,
        },
        year: {
                type:Number,
                required:true,
        },
        section: {
                type: String,
                required: true,
        },
    },
    {
        timestamps: true
    }
)

module.exports = model('books', BookSchema)