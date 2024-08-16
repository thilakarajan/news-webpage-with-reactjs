import '../styles/sections.css'
import { VscArrowSmallUp } from 'react-icons/vsc'

const sections = () => {
    const allSections = ['Governor','Paralymbics','TNPSC','The Dam is Full','A thousand Doubts','The rain','Kingdom of rama','Placement Flowers','Stalin','Adain'];
const sections = allSections.map((x)=>{
    return <p>
        <a href="#" className="link">{x}</a>
    </p>
})
    return (
      <div className="sections">
        <span className='Trending'>
          <i className="upArrow">
            <VscArrowSmallUp className='icon'/>
          </i>
          <h3>TRENDING</h3>
        </span>
        <div className="trending-sections">
            {sections}
        </div>
      </div>
    )
}
 
export default sections;