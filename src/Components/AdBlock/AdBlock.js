import React  from 'react';
import './AdBlock.css';

export default class AdBlock extends React.Component {
    render() {
        return (
            <div className="adblock"> 
                <div className="container">
                    <img src={this.props.image} alt="" className="image" />
                </div>
            </div>
        )
    }
}