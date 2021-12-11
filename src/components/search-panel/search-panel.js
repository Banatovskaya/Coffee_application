import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    setDataSearchValue = (e) => {
        const dataSearchValue = e.target.value
        this.props.setDataSearchValue(dataSearchValue)
    }

    render () {
         return (
            <div className="search-panel">
                Lookiing for
                <input type="text" 
                value={this.props.dataSearchValue} 
                placeholder="start typing here..." 
                onChange = {this.setDataSearchValue} 
                />
            </div>
        )
    }
}

export default SearchPanel;