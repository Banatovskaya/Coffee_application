import {NavLink,} from "react-router-dom"
import './links.css'


const Links= () => {

    const changeActive = (isActive)=>{
        if (isActive) {
            return {fontSize: '14px', fontWeight: 'bold', textDecoration: 'underline'}
            } 
    }



    return (
        
        <nav>
            <div className="links">
                <NavLink style={({isActive}) => changeActive(isActive)} to="/">Coffee house</NavLink>
                <NavLink style={({isActive}) => changeActive(isActive)} to="/ourcoffee">Our coffee</NavLink>
                <NavLink style={({isActive}) => changeActive(isActive)} to="/pleasure">For your pleasure</NavLink>
            </div>    
        </nav>
        
    )
}

export default Links;