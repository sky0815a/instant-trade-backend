const Items = require('../models/Items')

const itemSeed = require('./item.json')

Items.deleteMany()
  .then(() => Items.insertMany(itemSeed))
  .then(console.log)
  .catch(console.error)
  .finally(process.exit)