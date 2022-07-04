import React from 'react'

class Option extends React.Component{
    render(){
        return (
            <li key={this.props.idx}>{this.props.option}</li>
        );
    }
}

export default Option