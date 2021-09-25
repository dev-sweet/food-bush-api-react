import React from 'react';
import './Meal.css'
const Meal = (props) => {
    const {strMeal,idMeal,strCategory,strMealThumb,strInstructions} = props.meal;
    return (
        <div className="meal">
            <div className="meal-img">
             <img src={strMealThumb} alt="" />
            </div>
            <h2>{strMeal}</h2>
            <p>{strInstructions.slice(0,100)}</p>
            <p><small>Category : {strCategory}</small></p>
            <button className="details-btn" onClick={()=> props.handleDetails(idMeal)}>Details</button>
        </div>
    );
};

export default Meal;