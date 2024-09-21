import {useEffect, useState} from "react";
import './App.css';
import MyRecipesComponents from "./MyRecipesComponent";

function App() {

  const[mySearch, setMySearch] = useState("")
  const[myRecipes, setMyRecipes] = useState([]);
  const[wordSubmitted, setWordSubmitted] = useState("");

  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=3eb33f82&app_key=c4a6252efb7f1ad1822bd18082c9d23d`);
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSubmitted])


 const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault()
    setWordSubmitted(mySearch)    
  }


  return(
    <div className="App">
      <div className="container">
        <h1>1000 Recipes for your healthy body</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
        <input className="search" placeholder="Search" onChange={myRecipeSearch} value={mySearch}></input>
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
        </button>
    </div>  

    {myRecipes.map((element, index) =>(
      <MyRecipesComponents  key={index}
      label={element.recipe.label} 
      image={element.recipe.image} 
      calories={element.recipe.calories}
      ingredients={element.recipe.ingredientLines}
      mealType={element.recipe.mealType}
      dietLabel={element.recipe.dietLabels}/>
    ))}

    </div>
  )     
   
}

export default App;

  