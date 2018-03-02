import React, {Fragment} from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
	render() {
		return (<Fragment>
			<form action="" className="store-selector">
				<h2>PLEASE ENTER A BUSINESS</h2>
				<input type="text" required="required" placeholder="Business Name" defaultValue={getFunName()}/>
				<button type="submit">Visit Store</button>
			</form>
		</Fragment>);
	}
}

export default StorePicker;
