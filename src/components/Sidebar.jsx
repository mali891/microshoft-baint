import React from 'react';

export default class Sidebar extends React.Component {
	setHue = hue => this.props.setHue(hue);

	render() {
		return (
			<aside>
				<div className="sidebar-section">
					<h3>Colour</h3>
					<hr />
					<input type="color" onChange={e => this.setHue(e.target.value)} value={this.props.hue} />
				</div>
				<div className="sidebar-section">
					<h3>Stroke</h3>
					<hr />
					<input type="color" />
				</div>
				<div className="sidebar-section">
					<h3>Erase</h3>
					<hr />
					<input type="color" />
				</div>
			</aside>
		);
	}
}
