import React from 'react'
import HeaderRow  from './HeaderRow.js'
import DataRow  from './DataRow.js'
import { Table } from 'reactstrap';

const HipoTable = ({hipos, headerClick, sortTableBy}) => {
	return (
    <Table striped responsive>
      	<thead>
          	<HeaderRow headerClick={headerClick} sortTableBy={sortTableBy}/>
        </thead>
      	<tbody>
        {
        	hipos.map((hipo,i) => <DataRow hipo={hipo} key={hipo.id}/>)
        }
        </tbody>
	</Table>
    );
}

export default HipoTable