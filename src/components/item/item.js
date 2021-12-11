import {Link} from 'react-router-dom';
import './item.css';

const ItemCoffee = ({id, img, productName, amount, country, price, setIdItem}) => {

    return (
        <div className="item"
        onClick={() => {setIdItem(id)}}
        >
            <Link to="/item" >
                <div className="item_img">
                    <img src={img} alt="coffee foto" />
                </div>
                <div className='item_name'>
                    <div>{productName}</div>
                    <div>{amount}kg</div>
                </div>
                <div className="item_country">{country}</div>
                <div className='item_price'>{price}$</div>
            </Link>
        </div>
    )
}

export default ItemCoffee;
