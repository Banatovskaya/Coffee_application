import './list-item.css';
import ItemCoffee from '../item/item';
import ErrorBoundary from '../errorBoundary/errorBoundary';

const ListItem = ({data, setIdItem}) => {
 
const items = data.map((item)=>{
    const {id, ...itemData} = item;
    return (
        <ItemCoffee
            key={id}
            id={id}
            {...itemData}  
            setIdItem={setIdItem}     
        />
    )
})
return (
    <div className="container">
        <div className='list_items'>
        <ErrorBoundary>
             {items}
        </ErrorBoundary>
           
        </div>
    </div>
        
    )
}

export default ListItem;