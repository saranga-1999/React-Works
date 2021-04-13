import React from 'react';
import style from './recipe.module.css';
const Recipe=({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <h1 className={style.fonty}>{title}</h1>
            <ol className={style.monty}>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.monty}><h3>calories</h3>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
};

export default Recipe;
