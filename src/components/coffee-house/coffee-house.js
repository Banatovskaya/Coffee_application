import HeaderCoffeeHouse from '../header/header-coffee-house';
import AboutCoffeeHouse from '../about/about-coffeeHouse';
import BestProducts from '../best-products/best-products';
import ListItem from '../list-item/list-item';
import Footer from '../footer/footer';

const CoffeeHouse = ({data, setIdItem}) => {
    
    const dataBestProduct = (data) => {
        return data.filter((item) => {
			return (item.isBest)
		})
    }

    return (
        <div >
            <HeaderCoffeeHouse/>
            <AboutCoffeeHouse/>
            <BestProducts>
                <ListItem
				 data={dataBestProduct(data)}
                 setIdItem={setIdItem}
				/>	
            </BestProducts>
           <Footer/>
        </div>    
    )
}

export default CoffeeHouse;