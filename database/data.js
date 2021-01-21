const generateFakeData = () => {
  //generate 100 items
  let fakeData = [];

  for (let i = 1000; i < 1100; i++) {
    //each item will have a unqiue productId
    let item = {};
    item.productId = i;
    //each item will have an array of comparable items which will store 5 productIds
    item.comparableItems = [];
    //select 5 random productIds from 1000-1100
    //push each item into fakeData
  }
};

//helper function
//pick 5 random numbers between 1000-1100
const getComparableItemsId = (productId) => {
  //pick 5 random numbers between 1000-1100
  //can't pick the same number as the product
  let productIds = [];

  for (let j = 0; j < 5; j++) {
    let randomNum = Math.floor(Math.random() * (1100 - 1000));
    randomNum = randomNum + 1000;
    productIds.push(randomNum);
  }

  //check to see if all values are different than the comparing product
  for (let k = 0; k < productIds.length; k++) {
    if (productIds[k] === productId) {
      //if same val then call func again
      getComparableItemsId(productId);
    }
  }
  //return an array of 5 numbers
  return productIds;
};

getComparableItemsId(1001);

module.exports = generateFakeData;