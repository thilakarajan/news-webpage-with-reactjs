import '../styles/main-contents.css'
import image from '../assets/news.jpg'
import Cards from './cards'

const MainContent = () => {
    return (
      <div className="main-content">
        <div className="content">
          <h3>Current news</h3>
          <div className="both-content">
            <div className="left-content">
              <img src={image} alt="" />
              <p>
                Patongtern Shinawatra chosen as Thailand's prime ministerial
                candidate
              </p>
              <button>The World</button>
            </div>
            <div className="right-content">
              <section>
                <img src={image} alt="" />
                <div className="about">
                  <p>Back row for Rahul: Cong, condemnation</p>
                  <button>India</button>
                </div>
              </section>
              <section className="top">
                <img src={image} alt="" />
                <div className="about">
                  <p>
                    Developed India; Prime Minister Modi said that we will build
                    in 2047
                  </p>
                  <button>India</button>
                </div>
              </section>
              <section className="top">
                <img src={image} alt="" />
                <div className="about">
                  <p>
                    Bombs in 24 places in Assam? Ulba plot to disrupt
                    Independence Day
                  </p>
                  <button>India</button>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Cards />
      </div>
    )
}
 
export default MainContent;