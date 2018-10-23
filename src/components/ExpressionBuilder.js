import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import './ExpressionBuilder.css';
import Function from './Function.js';
import Expression from './Expression.js';

class ExpressionBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currFunc: null,
        }
    }

    generateExpressionBox() {
        if (!this.state.currFunc) {
            return <Expression className='expression-box' />;
        } else {
            return <div className='expression-box set-font center box'>
              <div>
                  <div className='function-option set-font center box'> {this.state.currFunc.name} </div>
                  {[...Array(this.state.currFunc.length)].map((x, index) => (
                      <input key={index} className='function-option set-font center box' />
                  ))}
              </div>
              <button className='function-option set-font center box' onClick={() => {
                  this.clearExpression();
              }}> CLEAR </button>
            </div>;
        }
    }

    generateFunctionOptions() {
        return <div className='center'>
            {this.props.functions.map((func, index) => (
                <Function key={func.name} funcItem={{func: func}} handleDrop={(funcItem) => {
                    this.setState({currFunc: funcItem.func});
                }} />
            ))}
        </div>;
    }

    clearExpression() {
        this.setState({currFunc: null});
    }

    render() {
        return <div>
            <div className='title set-font center'> Expression Builder </div>
            {this.generateExpressionBox()}
            {this.generateFunctionOptions()}
        </div>;
    }
}

export default DragDropContext(HTML5Backend)(ExpressionBuilder);
