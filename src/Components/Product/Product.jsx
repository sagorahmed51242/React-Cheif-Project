import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';


const Product = ({data,handleAddWantToCook}) => {
  const {recipe_image,preparing_time, calories, recipe_name,short_description,ingredients} = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure>
    <img className="w-full h-[350px] object-cover"
      src={recipe_image}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <p className="text-lg">Ingredents: {ingredients.length}</p>
    <ul className="list-disc pl-5">
      {ingredients.map((item,index) => (<li>{item}</li>))}
    </ul>
    <div className="flex">
      <p className='text-lg'><FontAwesomeIcon icon={faClock} /> {preparing_time} min</p>
      <p className='text-lg'> <FontAwesomeIcon icon={faAppleAlt} /> {calories} Calories</p>
    </div>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddWantToCook(data)} className="btn bg-blue-600 text-white">Want to Cook</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Product