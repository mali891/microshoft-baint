import React from 'react';
import ClearButton from './ClearButton';

export default class Canvas extends React.Component {
	state = {
		isDrawing: false,
		lastX: 0,
		lastY: 0,
	};

	componentDidMount() {}

	paint = e => {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		let isDrawing = this.state.isDrawing;

		if (!isDrawing) return;

		ctx.strokeStyle = this.props.hue;
		ctx.beginPath();
		ctx.moveTo(this.state.lastX, this.state.lastY);
		ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		ctx.stroke();
		ctx.strokeStyle = '';
		ctx.lineWidth = this.props.lineWidth;

		if (this.props.activeTool === 'brush') {
			ctx.lineJoin = 'round';
			ctx.lineCap = 'round';
		} else {
			ctx.lineJoin = 'miter';
			ctx.lineCap = 'square';
		}

		this.setState({
			lastX: e.nativeEvent.offsetX,
			lastY: e.nativeEvent.offsetY,
		});

		// this.props.setRainbowHue(hue);
	};

	painting = e => {
		this.setState({
			isDrawing: true,
			lastX: e.nativeEvent.offsetX,
			lastY: e.nativeEvent.offsetY,
		});
	};

	clearCanvas = () => {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		this.setState({
			isDrawing: false,
			lastX: 0,
			lastY: 0,
			hue: 0,
		});
	};

	render() {
		return (
			<React.Fragment>
				<canvas
					className={`${this.props.canvasBackground === 'dark' ? 'dark' : ''}`}
					width={window.innerWidth - 250}
					height={window.innerHeight}
					ref="canvas"
					onMouseMove={e => this.paint(e)}
					onMouseDown={e => this.painting(e)}
					onMouseUp={() => this.setState({ isDrawing: false })}
					onMouseOut={() => this.setState({ isDrawing: false })}
				/>
				{this.state.lastX > 0 && <ClearButton clearCanvas={this.clearCanvas}>Clear</ClearButton>}
			</React.Fragment>
		);
	}
}
