import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Header.css';

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
        console.log(horses[0].current);
        horses[0].current.startRace();
        horses[1].current.startRace();
        horses[2].current.startRace();

        this.setState({
            disabled : "disabled"
        })
    }

    render() {
        const disabled = this.state.disabled;
        return (
            <div className="header">
                <div className="header-title">Race Horses</div>
                <button onClick={this.startRaceHandler} ref={this.btn} disabled={disabled} >Start Race</button>
            </div>
        )
    }
}

export default observer(Header);