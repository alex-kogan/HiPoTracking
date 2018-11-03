import React from 'react'
import {HeaderColumn} from './HeaderColumn.js'

const HeaderRow = ({headerClick, sortTableBy}) => {
	return (
    <tr>
      <HeaderColumn title='First name' headerClick={headerClick} sortTableBy={sortTableBy}/>
      <HeaderColumn title='Last name' headerClick={headerClick} sortTableBy={sortTableBy}/>
      <HeaderColumn title='School' headerClick={headerClick} sortTableBy={sortTableBy}/>
      <HeaderColumn title='Major' headerClick={headerClick} sortTableBy={sortTableBy}/>
      <HeaderColumn title='Prefferd office' headerClick={headerClick} sortTableBy={sortTableBy}/>
      <HeaderColumn title='Start level' headerClick={headerClick} sortTableBy={sortTableBy}/>
      <HeaderColumn title='Start date' headerClick={headerClick} sortTableBy={sortTableBy}/>
      <th>Email</th>
      <th>Phone</th>
      <th>Reason for HiPo</th>
      <th>Other comments</th>
    </tr>
	);
}

export default HeaderRow
