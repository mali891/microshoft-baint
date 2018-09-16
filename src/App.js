import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

export default class App extends Component {
    state = {
        hue: '',
        lineWidth: 20
    }

    setHue = hue => this.setState({hue})

    setLineWidth = lineWidth => this.setState({lineWidth})

    // setRainbowHue = hue => hue > 359 ? this.setState({ hue: 0 }) : this.setState({ hue: this.state.hue + 1 });

    render() {
        return (
            <React.Fragment>
                <Sidebar 
                    hue={this.state.hue} 
                    lineWidth={this.state.lineWidth} 
                    setHue={this.setHue} 
                    setLineWidth={this.setLineWidth}
                />
                <Canvas 
                    hue={this.state.hue} 
                    lineWidth={this.state.lineWidth}
                />
            </React.Fragment>
        );
    }
}
