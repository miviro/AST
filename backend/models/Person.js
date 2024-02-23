const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema({
    indoor: [String],
    outdoor: [String]
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    hobbies: hobbySchema
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;