import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Header.css';
import playImage from '../assets/play-button.png';

class Header extends Component {

    constructor(props){
        super(props);
        this.startRaceHandler = this.startRaceHandler.bind(this);

        this.state = {
            disabled: ""
        }
    }

    startRaceHandler(){
        const { horses } = this.props;
        horses[0].current.startRace();
        horses[1].current.startRace();
        horses[2].current.startRace();

        this.setState({
            disabled : "disabled"
        })
    }

    resetState(){
        this.setState({
            disabled: ""
        })
    }

    render() {
        const disabled = this.state.disabled;
        return (
            <div className="header">
                <div className="header-title">Race Horses</div>
                <button onClick={this.startRaceHandler} ref={this.btn} disabled={disabled} >
                    START RACE
                    <img className="img-start" src={playImage} />
                </button>
            </div>
        )
    }
}

export default observer(Header);