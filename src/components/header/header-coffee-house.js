import './header.css'
import LinksLight from '../links/links-light';
import LineBeansLight from '../line-beans/line-beans-light';
import {Link} from 'react-router-dom';

const HeaderCoffeeHouse = () => {
    return (
        <header className='headerCoffeeHouse'>
            <div className='container'>
                <div className='header_links-wrap'>
                    <LinksLight/>
                </div>
                <div className="header_title coffee-house">
                    Everything You Love About Coffee
                </div>
                <LineBeansLight />
                <div className='header_subtitle-wrap'>
                    <div className='header_subtitle-coffee-house'>We makes every day full of energy and taste</div>
                    <div className='header_subtitle-coffee-house'>Want to try our beans?</div>
                </div>
                <Link to="/ourcoffee" > 
                <button className='header_button'>More</button>
                </Link>
            </div>
        </header>
    )
}

export default HeaderCoffeeHouse;
