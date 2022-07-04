import React from 'react'
import Header from './Header.jsx';
import Action from './Action.jsx';
import Options from './Options.jsx';
import AddOption from './AddOption.jsx';
import './IndecisionApp.css';

class IndecisionApp extends React.Component{
    constructor(){
        super();
        this.state = {
            options: ['One', 'Two', 'Three']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleDeleteOptions(){
        this.setState(()=> {return {options: []}});
    }

    handlePick(){
        console.log('handlePick');
        //Pick a random option from the array of options
        const numberOfOptions = this.state.options.length;
        const randomNum = Math.floor(Math.random()*numberOfOptions);
        //console.log('randomNum', this.state.options[randomNum]);
        alert(this.state.options[randomNum]);
    }

    
    handleAddOption(option){
        //Add element to options array

        //Check for duplicates and empty string before adding
        if (!option) {
            //alert("No value was entered in the textbox. Please enter value")
            return "No value was entered in the textbox. Please enter value";
        } else if (this.state.options.indexOf(option) > -1) {
            //alert("The value is a duplicate. Not added to list")
            return "The value is a duplicate. Not added to list"
        } 
        this.setState((prevState)=>{return {options: prevState.options.concat(option)}});
        //console.log(this.state.options);
    }

    render(){
        return (
            <div>
                <Header title="Indecision app" subtitle="Put your life in the hands of the computer" />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    onSubmit={this.addOption}
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;

