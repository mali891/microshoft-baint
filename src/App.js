import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

export default class App extends Component {
    state = {
        hue: '',
    }

    setHue = hue => this.setState({hue})

    // setRainbowHue = hue => hue > 359 ? this.setState({ hue: 0 }) : this.setState({ hue: this.state.hue + 1 });

    render() {
        return (
            <React.Fragment>
                <Sidebar hue={this.state.hue} setHue={this.setHue}/>
                <Canvas hue={this.state.hue}/>
            </React.Fragment>
        );
    }
}
