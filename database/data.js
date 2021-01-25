//helper function
//pick 5 random numbers between 1000-1100
const getComparableItemsId = (productId) => {
  let productIds = [];
  while (productIds.length < 5) {
    let randomNum = Math.floor(Math.random() * (1100 - 1000));
    randomNum = randomNum + 1000;
    if (randomNum === productId) {
      continue;
    }
    //check to make sure the number isn't already in the productIds array
    for (let i = 0; i < productIds.length; i++) {
      if (randomNum === productIds[i]) {
        continue;
      }
    }
    productIds.push(randomNum);
  }
  //return an array of 5 numbers
  return productIds;
};

const generateFakeData = () => {
  //generate 100 items
  let fakeData = [];

  for (let i = 1000; i < 1100; i++) {
    //each item will have a unqiue productId
    let item = {};
    item.productId = i;
    //each item will have an array of comparable items which will store 5 productIds
    //select 5 random productIds from 1000-1100
    item.comparableItems = getComparableItemsId(i);
    //push each item into fakeData
    fakeData.push(item);
  }
  return fakeData;
};

module.exports = generateFakeData;