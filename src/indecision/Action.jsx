import React from 'react'
import Button from '../common/Button.jsx';

class Action extends React.Component{
    render(){
        return (
            <>
                <Button handler={this.props.handlePick} label="What should I do?" disabled={!this.props.hasOptions}/>
            </>
        );
    }
}

export default Action;