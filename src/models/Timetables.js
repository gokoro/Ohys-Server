const mongoose = require('mongoose')

const timetableSchema = new mongoose.Schema({
    day: String,
    animes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Anime' }]
})

global.Timetable = global.Timetable || mongoose.model('Timetable', timetableSchema) 
module.exports = global.Timetable