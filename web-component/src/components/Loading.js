import React, { Component } from 'react';

import './Loading.css';

class Loading extends Component {
    render() {
        return (
            <>
                {this.props.isLoading ? <div className="loading-component">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> : null}
            </>
        );
    }
}

export default Loading;
