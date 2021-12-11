// import {Container} from 'react-bootstrap';
import './footer.css'
import LinksDark from '../links/links-dark';
import LineBeans from '../line-beans/line-beans';

const Footer = () => {
    return (
        <footer>
            <div className='container'>
               <div className="footer_links-wrap">
                    <LinksDark />
               </div>
               
                <div className="footer_line-beans">
                    
                    <LineBeans />
                </div>
            </div>
        </footer>
    )
}

export default Footer;
