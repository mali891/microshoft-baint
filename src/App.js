import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

export default class App extends Component {
    state = {
        hue: '',
        lineWidth: 20,
        activeTool: 'brush'
    }

    setHue = hue => this.setState({hue})

    setLineWidth = lineWidth => this.setState({lineWidth})

    setActiveTool = activeTool => this.setState({activeTool})

    // setRainbowHue = hue => hue > 359 ? this.setState({ hue: 0 }) : this.setState({ hue: this.state.hue + 1 });

    render() {
        return (
            <React.Fragment>
                <Sidebar 
                    hue={this.state.hue} 
                    lineWidth={this.state.lineWidth} 
                    activeTool={this.state.activeTool}
                    setHue={this.setHue} 
                    setLineWidth={this.setLineWidth}
                    setActiveTool={this.setActiveTool}
                />
                <Canvas 
                    hue={this.state.hue} 
                    lineWidth={this.state.lineWidth}
                />
            </React.Fragment>
        );
    }
}
