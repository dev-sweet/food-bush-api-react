import React from 'react';

const Name = (props) => {
 const mealName = [];
 
  for(let meal of props.meals){
    if(!mealName.includes(meal.strMeal)){
        mealName.push(meal.strMeal);
    };
  }
    return (
        <div>
            <h3>Your selected items {mealName.length}</h3>
              <ul>
                  {
                      mealName.map(name => <li key={name}>{name}</li>)
                  }
              </ul>
        </div>
    );
};

export default Name;