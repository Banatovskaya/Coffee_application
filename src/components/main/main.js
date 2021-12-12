import { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './main.css';
import About from '../about/about';
import Filter from '../filter/filter';
import SearchPanel from '../search-panel/search-panel';
import ListItem from '../list-item/list-item';
import ClearFilters from '../clear-filters/clear-filters';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: "",
			dataSearchValue: ""
		} 
	}

	onSearchSelect = (itemList, dataSearchValue) => {
		if (dataSearchValue.lenght === 0) {
			return itemList;
		} 
		return itemList.filter((item) => {
			return (item.productName.toLowerCase()).indexOf(dataSearchValue.toLowerCase()) > -1
		})
	}

	setDataSearchValue = (dataSearchValue) => {
		this.setState({dataSearchValue});
	}

	setDataFilterValue = (filter) => {
		this.setState({filter});
	}

	onFilterSelect = (itemList, filter) => {
		if (filter ==="") {
			return itemList;
		} 
		return itemList.filter((item) => {
			return item.country === filter
		})
	}

	clearFilters = () => {
		this.setState({filter:'',
		dataSearchValue: ""});
	}

	visibleClearFilters = () => {
		if (!!this.state.filter || !!this.state.dataSearchValue) {
			return true
		} else {
			return false
		}
	}

	render() {
	const data = this.onFilterSelect(this.onSearchSelect(this.props.data, this.state.dataSearchValue), this.state.filter);
		return (
			<div >
				<Header/>
				<About/>
				<div className='container' >
					<div className="filter-seach" >
						<ClearFilters
						clearFilters={this.clearFilters}
						visibleClearFilters={this.visibleClearFilters()}/>
							<div className="searchPanel_padding">
								<SearchPanel 
								setDataSearchValue={this.setDataSearchValue}
								dataSearchValue={this.state.dataSearchValue}
								/>
							</div>
							<div className="searchPanel_padding">
								<Filter setDataFilterValue={this.setDataFilterValue} />
							</div>
					</div>		
				</div >
				<div className="list_items-wrap">
					<ListItem
					data={data }
					setIdItem={this.props.setIdItem}
				/>			
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Main;
