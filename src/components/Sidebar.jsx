import React from 'react';
import ToolSelection from './ToolSelection';

export default class Sidebar extends React.Component {
	setHue = hue => this.props.setHue(hue);

	setLineWidth = lineWidth => this.props.setLineWidth(lineWidth);

	render() {
		return (
			<aside>
				<div className="sidebar-section">
					<h3>Tools</h3>
					<hr />
					<ToolSelection activeTool={this.props.activeTool} setActiveTool={this.props.setActiveTool} />
				</div>
				<div className="sidebar-section">
					<h3>Colour</h3>
					<hr />
					<input type="color" onChange={e => this.setHue(e.target.value)} value={this.props.hue} />
				</div>
				<div className="sidebar-section stroke-section">
					<h3>Stroke</h3>
					<hr />
					<div className="stroke-inputs">
						<input
							type="range"
							min="1"
							max="100"
							step="1"
							onChange={e => this.setLineWidth(e.target.value)}
							value={this.props.lineWidth}
						/>
						<input
							type="text"
							value={this.props.lineWidth}
							onChange={e => this.setLineWidth(e.target.value)}
						/>
					</div>
				</div>
			</aside>
		);
	}
}
