import React from 'react'
import Button from '../common/Button.jsx';
import './CounterApp.css';

class CounterApp extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        };
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleIncrement(){
        this.setState((prevState)=>{
            return {
                counter: prevState.counter + 1
            }
        });
    }

    handleDecrement(){
        this.setState((prevState) => {return {counter: prevState.counter - 1}});
    }

    handleReset(){
        this.setState(() => {return {counter: 0}});
    }

    render(){
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <div className="btn-group">
                    <Button handler={this.handleIncrement} label="Increment"/>
                    <Button handler={this.handleDecrement} label="Decrement"/>
                    <Button handler={this.handleReset} label="Reset"/>
                </div>
            </div>
        );
    }
}

export default CounterApp;

















