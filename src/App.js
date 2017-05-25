import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import appActions  from './app-actions.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Click the Square</h2>
                </div>
                <p className="App-intro">
                    Square clicked {this.props.clicks} times
                </p>
                <div onClick={this.props.appActions.incrementClick} style={{margin: '20px', backgroundColor: 'red', height: '120px', width: '120px', userSelect: 'none'}} >
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    clicks: state.clicks
})

const mapDispatchToProps = dispatch => ({ appActions: appActions(dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(App)
