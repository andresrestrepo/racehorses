import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Positions.css';
import trophy from '../assets/trophy.png';

class Positions extends Component {

    constructor(props) {
        super(props);
        this.resetHandler = this.resetHandler.bind(this);
    }

    resetHandler(){
        const {store, horses, header} = this.props;

        horses[0].current.resetRace();
        horses[1].current.resetRace();
        horses[2].current.resetRace();

        header.current.resetState();

        store.positions = [];
    }

    render() {
        const { store } = this.props;
        const len = store.positionsLen;
        let button = '';
        if (len === 3) {
            button = <button onClick={this.resetHandler}>Reset</button>
        }
        return (
            <div>
                <div className="positions">
                    <h3>Positions:</h3>
                    <img src={trophy} />
                    {store.positions.map((item, i) => (
                        <div className={'place' + i} key={i}>{item}</div>
                    ))}
                </div>
                <div className="container-reset">
                    {button}
                </div>
            </div>

        )
    }
}

export default observer(Positions);