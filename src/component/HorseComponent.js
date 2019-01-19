import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './HorseComponent.css';
import horse from "../assets/horse.gif";

class HorseComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 0
        }

    }

    moveHorse() {
        let plusPosition = Math.floor((Math.random() * 25) + 10);
        const { store, horse} = this.props;
        //check finished 
        if (this.state.position + plusPosition >= window.innerWidth - 100) {
            this.setState(state => ({
                position: window.innerWidth - 100
            }));
        } else {
            this.setState(state => ({
                position: state.position + plusPosition
            }));
        }

        if (this.state.position >= window.innerWidth - 100) {
            this.endRace();
            store.addPosition(horse);
        }

    }

    startRace() {
        this.interval = setInterval(() => this.moveHorse(), 300);
    }

    endRace() {
        clearInterval(this.interval);
    }

    resetRace(){
        this.setState({
            position: 0
        })
    }

    componentWillUnmount() {
        clearInterval(this.endRace);
    }

    render() {
        return (
            <div className="container-horse">
                <div className="horse" style={{ left: this.state.position }}>
                    <div className={this.props.horse}></div>
                    <div>{this.props.horse}</div>
                    <img src={horse} ></img>
                </div>
            </div>
        )
    }
}

export default observer(HorseComponent);