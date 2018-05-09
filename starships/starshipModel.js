const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    gender: String,
    height: {
        type: Number,
        min: 0
    }, 
    eye_color: String,
    // ships: [
    //     {
    //         type: ObjectId,
    //         ref: 'Starship'
    //     }
    // ]
    homeword: {
        type: ObjectId,
        ref: 'Planet'
    },
    address: {
        city: String,
        state: String,
        streetAddress: String
    }
});

const character = mongoose.model('Character', characterSchema);

const definiton = {
    starship_class: {
        type: String,
        required: true
    },
    hyperdrive_rating: String,
    key: Number,
    pilots: [
        {
            type: ObjectId,
            ref: 'Character'
        }
    ]
};

const options = {
    strict: false
}

const starshipSchema = new mongoose.Schema(defininiton, options);

module.exports = mongoose.model('Starship', starshipSchema, 'starships');