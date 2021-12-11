import { Component } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Main from '../main/main';
import ForYouPleasure from '../for-you-pleasure/for-you-pleasure';
import CoffeeHouse from '../coffee-house/coffee-house';
import CoffeeItemPage from '../coffee-item-page/coffee-item-page';

    ////////////////////////////////instead of backend
import _data from '../../db.json' 
import _imgItem from './coffee_item.jpg'; 
_data.data.forEach(item => {
	item.img = _imgItem;
	console.log(item.img)
})//////////////////////////////////instead of backend


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : _data.data,
			IdCoffeeItemPage: ""
		} 
	}

setIdItem = (id) => {
	this.setState({IdCoffeeItemPage: id})
}

showSelectedElement = (arr, num) => {
	return (arr.find(({id}) => id === num));
}

	render() {
		const itemData = this.showSelectedElement(this.state.data, this.state.IdCoffeeItemPage)
		
		return (
			<Router>	
				<Routes>
					<Route path="/ourcoffee" element={<Main
					data={this.state.data }
					setIdItem={this.setIdItem}
					/>}/>			
					<Route path="/" element={<CoffeeHouse
					data={this.state.data }
					setIdItem={this.setIdItem}
					/>}/>
					<Route path="/pleasure"element={<ForYouPleasure
					data={this.state.data }
					setIdItem={this.setIdItem}
					/>}/>
					<Route path="/item"element={<CoffeeItemPage	
					itemData={itemData}
					/>}/>
				</Routes>
			</Router>
		)
	}
}

export default App;
