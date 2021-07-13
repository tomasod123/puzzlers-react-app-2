import React, { Component } from "react";
import QuoteData from "./quotes.json";

class QuoteDetail extends Component {
    render() {
        const { quote } = this.props;
        return (
            <div className="App Flexbox-container">
                <div className="TextComponent Flexbox-item-1">
                    <h1>{quote.quote}</h1>
                </div>

                <div className="Source">
                    <h4>
                        {quote.author}{" "}
                        <span className="Years">{quote.lifespan}</span>
                    </h4>
                </div>

                <div className="TextComponent Flexbox-item-2">
                    <button className="PlusButton">+</button>
                    <span>{quote.votes}</span>
                    <button className="MinusButton">-</button>
                </div>
            </div>
        );
    }
}

export default QuoteDetail;
