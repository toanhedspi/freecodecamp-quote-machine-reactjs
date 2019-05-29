import React from 'react';
import { QuoteApp } from '../components/QuoteApp'
import { quotes } from '../quotes'

export default class QuoteAppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: [], randomQuote: null }
    }

    componentWillMount() {
        // Getting data here

        const data = JSON.parse(quotes);
        this.getRandomColor();
        this.setState({ data: data, randomQuote: data[0] });

    }

    onChangeQuote() {
        this.getRandomColor();
        this.getRandomQuote();
    }
    
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        
        this.setState({ color: color });
      }
      
    getRandomQuote() {
        const quotePosition = Math.floor(Math.random() * this.state.data.length);
        const { data } = this.state;

        this.setState({
            randomQuote: data[quotePosition]
        });
    }

    render() {

        return (
            <QuoteApp
                color={this.state.color}
                data={this.state.randomQuote}
                onChangeQuote={() => this.onChangeQuote()}
            />
        )
    }
}