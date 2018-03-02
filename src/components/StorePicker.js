import React, { Fragment } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  inputRef = React.createRef();
  //set go to business as property to bind "this" to component instance
  goToBusiness = event => {
    //prevent page reload
    event.preventDefault();
    //grab text from input
    const businessName = this.inputRef.value.value;
    //use react history.push for routing to go to business profile entered
    this.props.history.push(`/store/${businessName}`);
  };

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
