import '../styles/cards.css'
import image from '../assets/news.jpg'

const cards = () => {
    return (
      <div className="cards">
        <h3>Cards</h3>
        <div className="contents">
          <a href="#">
            <img src={image} alt="" />
          </a>
          <a href="#">
            <img src={image} alt="" />
          </a>
            <a href="#">
              <img src={image} alt="" />
            </a>
            <a href="#">
              <img src={image} alt="" />
            </a>
        </div>
      </div>
    )
}
 
export default cards;