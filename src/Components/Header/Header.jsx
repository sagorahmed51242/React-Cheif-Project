import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div>
        <div className="flex justify-between items-center mt-5">
            <div className="logo text-4xl font-bold">Recipe Calories</div>
            <div className="menu">
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className='flex gap-5 items-center'>
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow" placeholder="Search" />
                    </label>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header