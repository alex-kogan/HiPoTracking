import React, { Component } from 'react';
import './App.css';
import HipoTable from '../Components/HipoTable.js'
import {SortByHeader} from '../Components/HeaderColumn.js'
import { hipos } from '../hipos.js'
import { Button } from 'reactstrap'
import 'tachyons'

class App extends Component {
	constructor () {
		super(); // calls the constructor of component
		this.state = {
			hipos: hipos,
			sortTableBy: []
		};
	}

	onHeaderClick = (event) => {
		const direction = event.target.getAttribute('direction');
		const header = event.target.textContent;
		if (header===this.state.sortTableBy[0]) {
			event.target.setAttribute('direction', (direction==='ascending') ? 'decending' : 'ascending');
		}
		else {
			event.target.setAttribute('direction', 'ascending');
		}
		this.setState({sortTableBy: [header, event.target.getAttribute('direction')]});

	}

	onSortClearClick = (event) => {
		this.setState({sortTableBy: ['', '']});
	}

	render() {
		const sortedHipos = hipos.sort(SortByHeader(this.state.sortTableBy[0],this.state.sortTableBy[1]));
		return (
			<div className='w-100'>
				<div className='fl w-80'>
					<HipoTable hipos={sortedHipos} headerClick={this.onHeaderClick} sortTableBy={this.state.sortTableBy}/>
				</div>
				<div className='tc fl w-20'>
					<Button outline color="info" onClick={this.onSortClearClick}>Clear sort</Button>
					<Button outline color="info">Clear filter</Button>
				</div>
			</div>
		);
	}
}

export default App;
