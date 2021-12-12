import './links.css'
import imgCoffee from './coffee-beans-light.png'
import Links from './links'

const LinksLight = () => {
    return (
        <div className="links_light-wrap">
            <img src={imgCoffee} alt="coffee"/>
            <Links/>
        </div>    
    )
}

export default LinksLight;