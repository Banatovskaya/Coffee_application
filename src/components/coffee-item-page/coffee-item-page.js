import { Component, Fragment } from 'react';
import './coffee-item-page.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import AboutCoffeeItemPage from '../about/about-coffee-item-page';
import ErrorBoundary from '../errorBoundary/errorBoundary';

class CoffeeItemPage extends Component {
	constructor(props){
		super(props);
			this.state = {
				itemData:JSON.parse(localStorage.getItem('itemData'))
				} 
	}
	
    sendToLocalStorage = () => {
		const {itemData} = this.props
		if (itemData){
			localStorage.setItem('itemData', JSON.stringify(itemData))
		} else localStorage.setItem('itemData', JSON.stringify(this.state.itemData))
	}
	
	componentDidMount () {
		this.sendToLocalStorage()
	}

	render() {
		return (
			<Fragment >
				<Header/>
				<ErrorBoundary>
				<AboutCoffeeItemPage
				data={this.props.itemData||this.state.itemData}
				/>
				</ErrorBoundary>
				<Footer/>
   			</Fragment>
		)
	}
}

export default CoffeeItemPage;
