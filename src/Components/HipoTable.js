import React from 'react'
import HeaderRow  from './HeaderRow.js'
import DataRow  from './DataRow.js'
import { Table } from 'reactstrap';
import Scroll from './Scroll.js'

const HipoTable = ({hipos, headerClick, sortTableBy}) => {
	return (
    <Table striped responsive>
      	<thead>
          	<HeaderRow headerClick={headerClick} sortTableBy={sortTableBy}/>
        </thead>
      	<Scroll> 
          <tbody>  
            {
            	hipos.map((hipo,i) => <DataRow hipo={hipo} key={hipo.id}/>)
            }
          </tbody>
        </Scroll>
	</Table>
    );
}

export default HipoTable