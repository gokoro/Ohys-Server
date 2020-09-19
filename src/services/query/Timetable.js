module.exports = class Timetable {
    constructor(Model) {
        this.Model = Model
    }
    async getByDay(day) {
        const Model = this.Model

        const items = await Model.findOne({day: day}).populate('animes')
        return items || []
    }
}