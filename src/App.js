import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Nav/Nav';
import AdBlock from './Components/AdBlock/AdBlock';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Banner />
          <Nav />
          <AdBlock image='https://n.nordstrommedia.com/id/347ae169-94ac-4dfa-b42b-cac8fbf68504.jpeg?w=1609&amp;h=268' />

          <AdBlock image='https://n.nordstrommedia.com/id/6a86cf49-80df-4ef3-872d-d18e30833700.jpeg?w=1609&amp;h=591' />

          <AdBlock image='https://n.nordstrommedia.com/id/2479bf36-160e-4b23-8664-2d42138f0338.png?w=1609&amp;h=469' />

      </div>
    );
  }
}

export default App;
