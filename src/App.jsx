import React from "react";
import Card from "./components/card/Card";
import { recipes } from "./data/recipes";

function App() {
  return (
    <div>
       <h1 style={{ color: '#fb544b', textAlign: 'center' }}>
      Recipe Book</h1>
      <div className="main">
        {recipes?.map(recipe => (
          <Card 
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default App;