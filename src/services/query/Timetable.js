module.exports = class Timetable {
  constructor(Model) {
    this.Model = Model
  }
  async getByDay(day) {
    const Model = this.Model

    const items = await Model.findOne({ day: day }).populate('animes', [
      'name',
      'title',
      'released_time',
      'release_broadcaster',
      'imageUrl',
      'smallImageUrl',
      'items',
    ])

    return items || []
  }
}
