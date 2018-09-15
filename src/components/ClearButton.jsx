import React from 'react';

class ClearButton extends React.Component {
	render() {
		return (
			<button className="clear-canvas" onClick={this.props.clearCanvas}>
				Clear
			</button>
		);
	}
}

export default ClearButton;
