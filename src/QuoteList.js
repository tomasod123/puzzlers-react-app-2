import React, { Component } from "react";
import QuoteData from "./quotes.json";

class QuoteList extends Component {
    render() {
        return (
            <div>
                {QuoteData.map((quoteDetail, index) => {
                    return (
                        <div className="App Flexbox-container">
                            <div className="TextComponent Flexbox-item-1">
                                <h1>{quoteDetail.quote}</h1>
                            </div>

                            <div className="Source">
                                <h4>
                                    {quoteDetail.author}{" "}
                                    <span className="Years">{quoteDetail.lifespan}</span>
                                </h4>
                            </div>

                            <div className="TextComponent Flexbox-item-2">
                                <button className="PlusButton">+</button>
                                <span>{quoteDetail.votes}</span>
                                <button className="MinusButton">-</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default QuoteList;
