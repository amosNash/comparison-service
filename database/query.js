const db = require('./database.js');
const Comparison = require('./database.js');

const getSimilarItemsProductId = (id, callback) => {
  Comparison.find({productId: id}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      let productIds = items[0].comparableItems;
      callback(null, productIds);
    }
  });
};

module.exports = {
  getSimilarItemsProductId: getSimilarItemsProductId
};