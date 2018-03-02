import React, {Fragment} from 'react';

class StorePicker extends React.Component {
	render() {
		return (<Fragment>
			<form action="" className="store-selector">
				<h2>PLEASE ENTER A BUSINESS</h2>
				<input type="text" required="required" placeholder="Business Name"/>
				<button type="submit">Visit Store</button>
			</form>
		</Fragment>);
	}
}

export default StorePicker;
