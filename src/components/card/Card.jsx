import React, { useState } from "react";
import Detail from "../detail/Detail";

function Card(props) {
  // __define-ocg__ Initialize state to manage detail visibility
  const [varOcg, setOpenDetail] = useState(false);

  // __define-ocg__ Function to toggle the detail visibility
  const onClick = () => {
    setOpenDetail(!varOcg);
  };

  return (
    <div>
      <div className="card">
        <img src={props.recipe.image} alt={props.recipe.name} />
        <div className="title-container">
          <span className="title">{props.recipe.name}</span>
          {/* __define-ocg__ Button text based on state */}
          <button onClick={onClick}>
            {varOcg ? "Hide" : "View"} Recipe
          </button>
        </div>
      </div>
      
      {/* __define-ocg__ Conditionally render the Detail component */}
      {varOcg && (
        <Detail
          ingredients={props.recipe.ingredients}
          steps={props.recipe.steps}
        />
      )}
    </div>
  );
}

export default Card;
