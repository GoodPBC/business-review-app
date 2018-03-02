import React from 'react';

//could alternatively destructure props??
const Header = props => (
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
      <span>{props.tagline}</span>
    </h3>
  </header>
);
export default Header;
