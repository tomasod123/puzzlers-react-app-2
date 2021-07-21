import React, { useState } from "react";


const QuoteDetail = (props) => {
    const { quote, name } = props
    // Using props to give the initial count, before incrementing or decrementing 
    const [count, setCount] = useState(quote.votes);

    //State is handled within the component and is updated within the component, while props are handled outside of the component and must be changed outside of the component
    //Changing the state in a component will rerender that component
    function decrementCount() {

        if (count >= 1) { setCount(prevCount => prevCount - 1); }

    }
    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div className="App Flexbox-container">
            <div className="TextComponent Flexbox-item-1">
                <h1 className="quoteText">"{quote.quote}"</h1>
            </div>

            <div className="Source">
                <h4>
                    {quote.author}{" "}
                    <span className="Years">{quote.lifespan}</span>
                </h4>
            </div>

            <div className="TextComponent Flexbox-item-2">
                <button className="PlusButton" onClick={incrementCount}>+</button>
                {/* <span>{quote.votes}</span> */}
                <span className="count">{count}</span>
                <button className="MinusButton" onClick={decrementCount}>-</button>
            </div>
        </div>
    );
};

export default QuoteDetail;
