import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './SeparatorHorse.css';

class SeparatorHorse extends Component {

    render() {
        return (
            <div className="separator-horse"></div>
        )
    }
}

export default observer(SeparatorHorse);