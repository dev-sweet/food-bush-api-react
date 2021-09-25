import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Name from '../Name/Name';
import './Meals.css'

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const [clickedMeals,setClickedMeal] = useState([]);
    const [filteredMeals,setFilteredMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res => res.json())
        .then(data => {
            setMeals(data.meals);
            setFilteredMeals(data.meals);
        });
    },[]);

    const handleDetails = id => {
        const mealFind = meals.find(meal=> meal.idMeal===id);
        const selectedMeals = [...clickedMeals,mealFind];
        setClickedMeal(selectedMeals);
    }
    const handleSearch = event => {
        const result = meals.filter(meal => meal.strMeal.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredMeals(result);
    }
    return (
        <>
            <div className="search-container">
                <h1>Search Your Favorite Food</h1>
                <input type="text" onChange={handleSearch} placeholder="Search the food what you want..." />
            </div>
            <div className="meals-container">
                <div className="meals">
                    {
                        filteredMeals.map(meal => <Meal key={meal.idMeal} meal={meal} handleDetails={handleDetails} />)
                    }
                </div>
                <div className="meals-name">
                    <Name meals={clickedMeals} />
                </div>
            </div>
        </>
    );
};

export default Meals;