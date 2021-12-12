import './links.css'
import imgCoffee from './coffee-beans-dark.png'
import Links from './links'

const LinksDark = () => {
    return (
        <div className="links_dark-wrap">
            <img src={imgCoffee} alt="coffee"/>
            <Links/>
    </div>    
    )
}

export default LinksDark;