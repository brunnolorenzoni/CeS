import React, { Component } from 'react';

class Grid extends Component {


    constructor(props)
    {
        super(props);


        this.state = {
            items: this.props.items,
        }

    }

    buildGridItems()
    {

        var html;

        for(var i = 0; i < this.state.items.length; i++){
            html += <div></div>
        }

        return html;

    }

    render() {

        if(this.state.items && this.state.items.length){
            return (
                <div>
                    {this.buildGridItems}
                </div>
            );
        }

        else {
            return (
                <div>
                    Sem dados
                </div>
            );
        }

        
    }
}




export default Grid;
