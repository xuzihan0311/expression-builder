import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import './ExpressionBuilder.css';

const spec = {
    beginDrag(props) {
        return props.funcItem;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
        return props.handleDrop(props.funcItem);
    },
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Function extends Component {

    render() {
        const { funcItem, connectDragSource, isDragging } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            <div className='function-option grabbable set-font center box' style={{ opacity }}> {funcItem.func.name} </div>
        );
    }
}

export default DragSource('function', spec, collect)(Function);
