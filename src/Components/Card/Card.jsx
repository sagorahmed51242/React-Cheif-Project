
const Card = ({wantToCook,handleRemoveCard,prepared ,time, totolcalories}) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center py-2">Want to Cook: {wantToCook.length}</h1>
      <div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Preparing Time</th>
        <th>Calorites</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {wantToCook.map((card,index) => <tr>
        <th>{index+1}</th>
        <td>{card.recipe_name}</td>
        <td>{card.preparing_time}</td>
        <td>{card.calories}</td>
        <button onClick={()=>handleRemoveCard(card.recipe_id)} className="btn bg-green-500 text-white">Preparing</button>
      </tr>)}
    </tbody>
  </table>
</div>

<div className="border-t mt-8">
  <h1 className="text-xl font-bold text-center py-2">Currently Cooking: {prepared.length}</h1>
      <div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Preparing Time</th>
        <th>Calorites</th>
      </tr>
    </thead>
    <tbody>
      {prepared.map((card,index) => <tr className="hover:bg-blue-500 hover:text-white">
        <th>{index+1}</th>
        <td>{card.recipe_name}</td>
        <td>{card.preparing_time}</td>
        <td>{card.calories}</td>
      </tr>)}
      <tr>
        <th></th>
        <td></td>
        <td>Total Time:{time} min</td>
        <td>Total Calories: {totolcalories}</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

    </div>
  )
}

export default Card