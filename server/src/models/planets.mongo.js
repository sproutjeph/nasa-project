const mongoose = require("mongoose");

const planetShecma = new mongoose.Schema({
  keplerName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Planet", planetShecma);
