import React from "react";
import QuoteData from "./quotes.json";

import QuoteDetail from "./QuoteDetail";


const QuoteList = () => {
    return (
        <div>
            {QuoteData.map((quoteDetail, index) => {
                return <QuoteDetail quote={quoteDetail} key={`post-list-key ${index}`} />
            })}
        </div>
    );
}


// class QuoteList extends Component {
//     render() {
//         return (
//             <div>
//                 {QuoteData.map((quoteDetail, index) => {
//                     return <QuoteDetail quote={quoteDetail} key={`post-list-key ${index}`} />
//                 })}
//             </div>
//         );
//     }
// }

export default QuoteList;
