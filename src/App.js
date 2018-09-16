import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

export default class App extends Component {
    state = {
        hue: '#41CAB4',
        lineWidth: 20,
        activeTool: 'brush',
        canvasBackground: 'light'
    }

    setHue = hue => this.setState({hue})

    setLineWidth = lineWidth => this.setState({lineWidth})

    setActiveTool = activeTool => this.setState({activeTool})

    setCanvasBackground = canvasBackground => this.setState({canvasBackground})

    // setRainbowHue = hue => hue > 359 ? this.setState({ hue: 0 }) : this.setState({ hue: this.state.hue + 1 });

    render() {
        return (
            <React.Fragment>
                <Sidebar 
                    hue={this.state.hue} 
                    lineWidth={this.state.lineWidth} 
                    activeTool={this.state.activeTool}
                    setHue={this.setHue} 
                    canvasBackground={this.state.canvasBackground}
                    setLineWidth={this.setLineWidth}
                    setActiveTool={this.setActiveTool}
                    setCanvasBackground={this.setCanvasBackground}
                />
                <Canvas 
                    hue={this.state.hue} 
                    lineWidth={this.state.lineWidth}
                    activeTool={this.state.activeTool}
                    canvasBackground={this.state.canvasBackground}
                />
            </React.Fragment>
        );
    }
}
