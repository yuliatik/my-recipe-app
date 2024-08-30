import {useEffect, useState} from "react";
import './App.css';
import MyNutritionsComponents from "./MyNutritionsComponent";

// https://api.edamam.com/api/nutrition-data?app_id=cc908114&app_key=64ca6d37d5e2f1ac78d6cf74944d3fe3&nutrition-type=cooking&ingr=cheese


function App() {
  const [mySearch, setMySearch] = useState("");
  const [myNutritions, setMyNutritions] = useState([]);

  useEffect(() =>{
    const getNutrition = async()=>{
      const response = await fetch("https://api.edamam.com/api/nutrition-data?app_id=cc908114&app_key=64ca6d37d5e2f1ac78d6cf74944d3fe3&nutrition-type=cooking&ingr=cheese");
      const data=await response.json();
      setMyNutritions(data.hits);
    }
    getNutrition()
  },[] )

  const myNutritionSearch = (e) => 
    setMySearch(e.target.value);
    
  return(
    <div className='App'>
      <div className='container'>
      <h1>Nutrition Analyse</h1>
    </div>

    <div className="container">
      <form>
        <input className="search" placeholder="Search..." onChange={myNutritionSearch} value={mySearch}></input>
      </form>
    </div>

    <div className='container'>
     <button>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

{myNutritions.map((element) =>(
      <MyNutritionsComponents />
          ))} 

    </div>
  )   
     
   
}

export default App;
