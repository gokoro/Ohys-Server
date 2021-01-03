module.exports = class Anime {
    constructor(Model) {
        this.Model = Model
    }
    async getById(id) {
        try {
            return await this.Model.findById(id).exec()
        } catch (error) {
            return null
        }
    }
    async getByName(name) {
        try {
            return await this.Model.findOne({ name }).exec()
        } catch (error) {
            return null
        }
    }
}