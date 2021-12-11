// import {Container} from 'react-bootstrap';
import './filter.css'

const Filter = (props) => {

    const buttonsData = [ "Brazil","Kenya","Columbia"] 

    const setDataFilterValue = (e) => {
        props.setDataFilterValue(e.target.value)
       
    }

    const buttons = buttonsData.map((name) => {
        
        return (
            <button type="button"
            key={name}
            value={name}
            onClick={setDataFilterValue}
            >{name}
            </button>
        )
    })    

    return (
        <div className="filter">
            Or filter
            <div className="filter_buttons">
                {buttons}
                
            </div>
        </div>
    )
}

export default Filter;