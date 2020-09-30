import React, { Component } from 'react';
import './TopSection.css'

class TopSection extends Component {

    render() {
        return (
            <div className="status-bar">
                {/* top left */}
                <div id="status-bar-logo">
                    <p><i className="fa fa-free-code-camp" aria-hidden="true"> </i>
                        <span>FCC: </span>Calculator</p>
                </div>

                {/* battery */}
                <div id="status-bar-right">
                    <p>100% <i className="fa fa-battery-full" aria-hidden="true"/></p>
                </div>
            </div>
        );
    }
}

export default TopSection;
