const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Itemcomparison', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('CONNECTED TO DB');
});


const comparisonSchema = new mongoose.Schema({
  productId: Number,
  comparableItems: [{type: Number}]
});

const Comparison = mongoose.model('Comparison', comparisonSchema);

module.exports = Comparison;