import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToBusiness = this.goToBusiness.bind(this);
  }
  //empty ref
  inputRef = React.createRef();

  goToBusiness(event) {
    //prevent page reload
    event.preventDefault();
    console.log('going the the store');
    //grab text from input
    console.log(this);
    //go to business profile entered
  }

  render() {
    return (
      <Fragment>
        <form action="" className="store-selector" onSubmit={this.goToBusiness}>
          <h2>PLEASE ENTER A BUSINESS</h2>
          <input
            type="text"
            ref={this.inputRef}
            required="required"
            placeholder="Business Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
