import React, { Fragment } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="biz-review-app">
          <div className="menu">
            <Header tagline="The best review app in town" />
          </div>
          <Order />
          <Inventory />
        </div>
      </Fragment>
    );
  }
}

export default App;
