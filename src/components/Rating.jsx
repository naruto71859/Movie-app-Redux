import React from "react";


export default function Rating({ rate, onChangeRating = () => {} }) {
  let tab = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      tab.push(
        <span
          key={i}
          onClick={() =>
            onChangeRating(i + 1)
          } /* information va etre diffuser du child vers le parent 
             à travers des function= event(onClick) avec un paramétre (dans ce component i+1) du rating vers rating filter ver App  */
        >
          ★
        </span>
      );
    } else {
      tab.push(
        <span key={i} onClick={() => onChangeRating(i + 1)}>  
          ☆
        </span>
      );
    }
  }

  return <div className="rate ">{tab}</div>;


  
}


