// const mongoose = require('mongoose');

// const YourSchema = new mongoose.Schema({
//     // id: {
//     //     type: Number,
//     //     required: true,
//     //     unique: true,
//     // },
//     // title: {
//     //     type: String,
//     //     required: true,
//     // },
//     // actions: [{
//     //     type: String,
//     //     required: true,
//     // }],
//     // id:,
//     // tittle: String,
//     // action: String,

//     // title: String,
//     // author: String,
//     // PlaceOfOrigin: String,
//     // Description: String

    
// });

// const YourModel = mongoose.model('List', YourSchema);

// module.exports = YourModel;

const mongoose = require('mongoose');

const YourSchema = new mongoose.Schema({
    id: {
        type: Number,
        // required: true,
        // unique: true,
    },
    day: {
        type: String,
        // If it's required, you can set it to true
        // required: true,
    },
    title: {
        type: String,
        // required: true,
    },
    actions: {
        type: String,
        // required: true,
    },
    // Add other fields if needed
});

const YourModel = mongoose.model('List', YourSchema);

module.exports = YourModel;

