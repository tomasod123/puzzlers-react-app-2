import React, { useState } from "react";


const QuoteDetail = (quote) => {
    const [count, setCount] = useState(4);

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

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
                <button className="PlusButton" onClick={incrementCount}>+</button>
                {/* <span>{quote.votes}</span> */}
                <span>{count}</span>
                <button className="MinusButton" onClick={decrementCount}>-</button>
            </div>
        </div>
    );
};



// class QuoteDetail extends Component {

//     render() {
//         const { quote } = this.props;
//         return (
//             <div className="App Flexbox-container">
//                 <div className="TextComponent Flexbox-item-1">
//                     <h1>{quote.quote}</h1>
//                 </div>

//                 <div className="Source">
//                     <h4>
//                         {quote.author}{" "}
//                         <span className="Years">{quote.lifespan}</span>
//                     </h4>
//                 </div>

//                 <div className="TextComponent Flexbox-item-2">
//                     <button className="PlusButton">+</button>
//                     {/* <span>{quote.votes}</span> */}
//                     <span>0</span>
//                     <button className="MinusButton">-</button>
//                 </div>
//             </div>
//         );
//     }
// }

export default QuoteDetail;
