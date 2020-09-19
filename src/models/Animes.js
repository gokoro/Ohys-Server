// Read-only databases. To leave schema parameter empty makes the model for read-only.
// The logic parsing animes is here: https://github.com/gokoro/Ohys-Parse

// Reference: https://stackoverflow.com/questions/28630865/mongoose-read-only-without-schema

const mongoose = require('mongoose')

global.Anime = global.Anime || mongoose.model('Anime', new mongoose.Schema())
module.exports = global.Anime
