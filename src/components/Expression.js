import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import './ExpressionBuilder.css';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem(),
    }
}

class Expression extends Component {

    render() {
        const { connectDropTarget } = this.props;

        return connectDropTarget(
            <div className={`${this.props.className} set-font center box`} />
        );
    }
}

export default DropTarget('function', {}, collect)(Expression);
