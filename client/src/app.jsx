import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from '../style.js';
import ItemList from './components/itemList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      item1: null,
      item2: null,
      item3: null,
      item4: null,
      item5: null,
      similarItems: []
    };
    this.getSimilarItems = this.getSimilarItems.bind(this);
  }

  //get items from comparison/getSimilarItems/comparison
  getSimilarItems (productId) {
    axios.get(`http://localhost:4005/comparison/getSimilarItems/${productId}`)
      .then((response) => {
        let items = response.data;
        console.log(items);
      })
      .catch(err => {
        console.log(err);
      });
  }

  //get info for each item


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