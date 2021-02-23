const express = require('express');
const app = express();
const port = 4005;
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const query = require('../database/query.js');
const cors = require('cors');

app.use(cors());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../public'));

app.use('/:productId', express.static( __dirname + '/../public'));



app.get('/comparison/getSimilarItems/:productId', (req, res) => {
  let productId = req.params.productId;
  //need to get 5 productIds from Database
  query.getSimilarItemsProductId(productId, (err, items) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(items);
      //items is an array of productIds
      //will use these productIds to make more API requests for item info
    }
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});