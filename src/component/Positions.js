import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Positions.css';

class Positions extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const { store } = this.props;
        return (
            <div className="positions">
                <h3>Positions:</h3>
                {store.positions.map((item, i) => (
                    <div className={'place'+i} key={i}>{item}</div>
                ))}
            </div>
        )
    }
}

export default observer(Positions);