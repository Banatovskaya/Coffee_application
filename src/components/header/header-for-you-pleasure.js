import './header.css'
import LinksLight from '../links/links-light';

const Header = () => {
    return (
        <header className='headerForYouPleasure'>
            <div className='container'>
                <div className='header_links-wrap'>
                    <LinksLight/>
                </div>
                <div className="header_title">
                    For your pleasure
                </div> 
            </div>
        </header>
    )
}

export default Header;
