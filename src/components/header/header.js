import './header.css'
import LinksLight from '../links/links-light';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header_links-wrap'>
                    <LinksLight/>
                </div>
                <div className="header_title">
                    Our Coffee
                </div> 
            </div>
        </header>
    )
}

export default Header;
