import React, {Fragment} from 'react';

class Header extends React.Component {
	render() {
		return (<Fragment>
			<header className="top">
				<h1>
					Best
					<span className="ofThe">
						<span className="of">of</span>
						<span className="the">the</span>
					</span>
					Town
				</h1>
				<h3 className="tagline">
					<span>{this.props.tagline}</span>
				</h3>
			</header>
		</Fragment>);
	}
}

export default Header;
