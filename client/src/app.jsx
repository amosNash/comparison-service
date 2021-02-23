import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from '../style.js';
import ItemList from './components/itemList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      ids: [],
      photos: [],
      names: [],
      prices: [],
      brands: []
    };
    this.getSimilarItems = this.getSimilarItems.bind(this);
    this.getItemDescription = this.getItemDescription.bind(this);
    this.getItemNames = this.getItemNames.bind(this);
    this.getItemBrands = this.getItemBrands.bind(this);
  }

  //get item info
  getItemDescription (productIds) {
    let item1 = productIds[0];
    let item2 = productIds[1];
    let item3 = productIds[2];
    let item4 = productIds[3];
    let item5 = productIds[4];
    let item6 = productIds[5];
    axios.get(`http://ec2-18-217-85-161.us-east-2.compute.amazonaws.com:4004/descriptions/multiple?${item1}=${item1}&${item2}=${item2}&${item3}=${item3}&${item4}=${item4}&${item5}=${item5}&${item6}=${item6}`)
      .then((response) => {
        let itemDescriptions = response.data;
        this.getItemNames(itemDescriptions);
        this.getItemBrands(itemDescriptions);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //get ItemNames
  getItemNames (items) {
    let itemNames = [];
    for (let i = 0; i < items.length; i++) {
      itemNames.push(items[i].itemName);
    }
    this.setState({
      names: itemNames
    });
  }
  //get Item Brands
  getItemBrands (items) {
    let itemBrands = [];
    for (let i = 0; i < items.length; i++) {
      itemBrands.push(items[i].brand);
    }
    this.setState({
      brands: itemBrands
    });
  }

  //get items from comparison/getSimilarItems/comparison
  getSimilarItems (id) {
    let productId = id;
    let productIds = [];
    productIds.push(productId);
    this.setState({
      ids: productIds
    });
    axios.get(`http://localhost:4005/comparison/getSimilarItems/${productId}`)
      .then((response) => {
        let similarIds = response.data;
        this.setState({
          ids: productIds.concat(similarIds)
        });
        this.getItemDescription(this.state.ids);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //get info for each item by sending request to description service, price service


  //componentDidMount shall call getSimilarItems
  componentDidMount () {
    //get productId from url or 1000
    //call getSimilarItems with productId
    this.getSimilarItems(1000);
  }


  //pass down similar items to ItemList

  render () {
    return (
      <div>
        <Title>Comparison Service</Title>
        <ItemList similarItems={this.state.similarItems} item={this.state.item}></ItemList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('comparison'));