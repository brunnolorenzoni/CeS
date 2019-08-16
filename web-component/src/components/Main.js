import React, { Component } from 'react';

import './Main.css';
import Grid from './Grid';
import Loading from './Loading';

class Main extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            isLoaded: false,
            isLoading: false,
            items: null,
        }
    }

    getData(e)
    {

        e.preventDefault();

        this.setState({
            isLoading: true,
        });

        fetch("http://fipeapi.appspot.com/api/1/motos/marcas.json")
        .then(res => res.json())
        .then(
            (result) => {

                this.setState({
                    isLoaded: true,
                    isLoading: false,
                    items:  result
                });

            },

            (error) => {

                this.setState({
                    isLoaded: true,
                    isLoading: false,
                    items:  false
                });
            }
        )

    }


    render() {

        console.log(this.state.items)

        return (
            <div>
                <button type="button" className="btn" onClick={this.getData.bind(this)}>GET</button>
                <Grid items={this.state.items}></Grid>
            </div>
                
        );
    }
}


export default Main;
