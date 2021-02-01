const express = require('express');
const app = express();
const port = 4005;
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const query = require('../database/query.js');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../client/dist'));

app.get('/comparison/:productId/getSimilarItems', (req, res) => {
  let productId = req.params.productId;
  //need to get 5 productIds from Database
  query.getSimilarItemsProductId(productId, (err, items) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(items);
    }
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});