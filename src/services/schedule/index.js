// Model
const TimetableModel = require('../../models/Timetables')

// Class
const Timetable = require('../query/Timetable')

module.exports = async params => {
    const { day } = params
    const timetable = new Timetable(TimetableModel)
    
    const tables = await timetable.getByDay(day)

    return { 
        status: !tables.animes ? false : true,
        tables
    }
}