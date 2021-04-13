import React,{useEffect,useState} from 'react';
import Recipe from "./Recipe"; 
import logo from './logo.svg';
import './App.css';

const App = () =>{
  const APP_ID ="70048aec";
  const APP_KEY ="5cd1727fc83c8e370e3362acb4314ff4"
  // const ExampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const[recipes,setRecipes]=useState([]);
  const[search,setSearch]=useState("");
  const[query,setQuery]=useState('chicken')
  useEffect(()=>{
    getRecipes();
  },[query]);
  const getRecipes=async()=>{
    const response=await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data=await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
  };
  const updateSearch=e=>{
    setSearch(e.target.value);

  };
  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

   return(
     <div className="App">
       <form onSubmit={getSearch} className="search-form">
         <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
         <button className="search" type="submit">Search</button>
       </form>
       <div className="recipes">
       {recipes.map(recipe=>(
         <Recipe
         key={recipe.recipe.label} 
         title={recipe.recipe.label}
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}
         ingredients={recipe.recipe.ingredients}> 
         </Recipe>
       ))}
       </div>
     </div>
   );
};

export default App;
