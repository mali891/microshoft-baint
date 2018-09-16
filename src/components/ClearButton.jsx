import React from 'react';

class ClearButton extends React.Component {
	render() {
		return (
			<button className="clear-canvas" onClick={this.props.clearCanvas}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.015 512.015">
					<path d="M298.594 256.011L503.183 51.422c11.776-11.776 11.776-30.81 0-42.586s-30.81-11.776-42.586 0L256.008 213.425 51.418 8.836C39.642-2.94 20.608-2.94 8.832 8.836s-11.776 30.81 0 42.586l204.589 204.589L8.832 460.6c-11.776 11.776-11.776 30.81 0 42.586a30.034 30.034 0 0 0 21.293 8.824c7.71 0 15.42-2.952 21.293-8.824l204.589-204.589 204.589 204.589a30.034 30.034 0 0 0 21.293 8.824c7.71 0 15.42-2.952 21.293-8.824 11.776-11.776 11.776-30.81 0-42.586L298.594 256.011z" />
				</svg>
			</button>
		);
	}
}

export default ClearButton;
