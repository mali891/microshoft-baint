import React from 'react';
import ToolSelection from './ToolSelection';

export default class Sidebar extends React.Component {
	setHue = hue => this.props.setHue(hue);

	setLineWidth = lineWidth => this.props.setLineWidth(lineWidth);

	setCanvasBackground = canvasBackground => this.props.setCanvasBackground(canvasBackground);

	render() {
		return (
			<aside>
				<div className="sidebar-section">
					<h3>Tools</h3>
					<hr />
					<ToolSelection
						hue={this.props.hue}
						activeTool={this.props.activeTool}
						setActiveTool={this.props.setActiveTool}
						setHue={this.props.setHue}
					/>
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
				<div className="sidebar-section">
					<h3>Canvas background</h3>
					<hr />
					<div className="background-buttons">
						<button
							className={`background-select background-light${
								this.props.canvasBackground === 'light' ? ' active' : ''
							}`}
							onClick={() => this.setCanvasBackground('light')}
						/>
						<button
							className={`background-select background-dark${
								this.props.canvasBackground === 'dark' ? ' active' : ''
							}`}
							onClick={() => this.setCanvasBackground('dark')}
						/>
					</div>
				</div>
			</aside>
		);
	}
}
