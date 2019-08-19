import React, { Component } from 'react';

class Grid extends Component {
    render() {
        console.log(this.props.items);
        if (this.props.items){
            return (
                <>
                {this.props.items.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    );
                })}
                </>
            );
        }
        return (
            <div>
                Sem dados
            </div>
        );

        
    }
}

export default Grid;
