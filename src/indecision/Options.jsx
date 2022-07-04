import React from 'react'
import Option from './Option.jsx';
import Button from '../common/Button.jsx';

class Options extends React.Component{
    render(){
        return (
            <div>
                <Button handler={this.props.handleDeleteOptions} label="Clear all"/>  
                <h3>Your options are:</h3>
                <ul>
                    {this.props.options.map((option, idx) => <Option key={idx} option={option} />)}
                </ul> 
            </div>
        );
    }

}

export default Options