import React, { Component } from 'react';

import './Main.css';
import Grid from './Grid';
import Loading from './Loading';

class Main extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            isLoading: false,
            items: null,
        }

        this.getData = this.getData.bind(this);
    }

    getData(e)
    {

        e.preventDefault();

        this.setState({
            isLoading: true,
        });

        setTimeout(() => {
            fetch("http://fipeapi.appspot.com/api/1/motos/marcas.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        items:  result
                    });
                },
    
                (error) => {
                    this.setState({
                        isLoading: false,
                        items:  false
                    });
                }
            )
        }, 2000);

    }

    render() {

        return (
            <div>
                <Loading isLoading={this.state.isLoading} />
                <button type="button" className="btn" onClick={this.getData}>GET</button>
                {this.state.items ? <Grid items={this.state.items}></Grid> : null}
            </div>
                
        );
    }
}


export default Main;
