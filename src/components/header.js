import '../styles/header.css'
import { IoIosLogIn } from 'react-icons/io'
const Header = () => {
    return (
      <header>
        <nav>
          <ul>
            <div className="blue">
              <li className="blue">New street</li>
            </div>
            <li>ipaper</li>
            <li>cinema</li>
            <li>Temples</li>
            <li>Books</li>
            <li>Subscription</li>
          </ul>
          <button>
            Sign up <IoIosLogIn />
          </button>
        </nav>
      </header>
    )
}
 
export default Header;