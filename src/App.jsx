import { useState } from "react"
import Card from "./Components/Card/Card"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Products from "./Components/Products/Products"

function App() {
  const [wantToCook, setWantToCook] = useState([]);
  const [prepared, setPrepared] = useState([]);


  const [time, setTime] = useState(0);
  const [totolcalories, setTotalCalories] = useState(0);

  const handlePreparedTimeAndCalories = (PreparingTime, calories) => {
    setTime(time => time + PreparingTime);
    setTotalCalories(totolcalories => totolcalories + calories);
  }


  const handleRemoveCard = (id) => {
    const preparedCook = wantToCook.find((card) => card.recipe_id === id);
    handlePreparedTimeAndCalories(preparedCook.preparing_time, preparedCook.calories);

    const newWantToCook = wantToCook.filter((card) => card.recipe_id !== id);
    setWantToCook(newWantToCook);

    setPrepared([...prepared, preparedCook]);
  }



  const handleAddWantToCook = (wantToCookcard) => {

    const isExits = wantToCook.find((card) => card.recipe_id == wantToCookcard.recipe_id);
    if (isExits) {
      alert("Already Exists!");
    }else{
      setWantToCook([...wantToCook,wantToCookcard]);
    }
  }


  return (
    <>
    <div className="container mx-auto">
    <Header/>
    <Hero/>
    <div  className="grid grid-cols-3 justify-center mt-10 gap-10">
      <div className="col-span-2">
        <Products handleAddWantToCook={handleAddWantToCook} />
      </div>
      <div className="col-span-1 border rounded-lg">
        <Card wantToCook={wantToCook} prepared={prepared} handleRemoveCard={handleRemoveCard} time={time} totolcalories={totolcalories}/>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
