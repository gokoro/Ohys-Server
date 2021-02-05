module.exports = class Timetable {
  constructor(Model) {
    this.Model = Model
  }
  async getByDay(day) {
    const Model = this.Model

    const items = await Model.findOne({ day: day }).populate('animes', [
      'name',
      'title',
      'imageUrl',
      'bannerImage',
      'color',
      'season',
      'released_year',
      'description',
      'released_time',
      'release_broadcaster',
      'episode_info',
      'items',
    ])

    return items || []
  }
}
