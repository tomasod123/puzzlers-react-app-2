import React, { Component } from "react";
import QuoteData from "./quotes.json";

import QuoteDetail from "./QuoteDetail";

class QuoteList extends Component {
    render() {
        return (
            <div>
                {QuoteData.map((quoteDetail, index) => {
                    return <QuoteDetail quote={quoteDetail} key={`post-list-key ${index}`} />
                })}
            </div>
        );
    }
}

export default QuoteList;
