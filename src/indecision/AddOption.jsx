import React from 'react'

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state ={
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        // Use e.target.elements, not e.target.children
        //console.log(e.target.elements.newOption.value);

        const option = e.target.elements.newOption.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(()=>{return {error: error}})
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    {/* Don't use action or onClick, use onSubmit */}
                    <label htmlFor="newOption">Enter a new option:</label>
                    {/* Use camel case for input name, hyphen does not work*/}
                    <input type="text" name="newOption"/>

                    {/* Don't use input:btn use button */}
                    {/* <input type="button" value="Add"/> */}
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddOption
