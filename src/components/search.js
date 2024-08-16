import '../styles/search.css'
import { FaSearch } from 'react-icons/fa'



const Search = () => {
    const now = new Date()
    const month = now.getMonth()
    const day = now.getDay()
    const Months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const date = now.getDate()
    const year = now.getFullYear()
    return (
      <div className="search">
        <p id="day">
          {days[day]},{Months[month]} {date},{year}
        </p>
        <i className='search1'>
          <FaSearch />
        </i>
      </div>
    )
}
 
export default Search;