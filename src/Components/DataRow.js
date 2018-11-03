import React from 'react'

const DataRow = ({hipo}) => {
	return (
    <tr>
      <td>{hipo.firstName}</td>
      <td>{hipo.lastName}</td>
      <td>{hipo.school}</td>
      <td>{hipo.major}</td>
      <td>{hipo.office}</td>
      <td>{hipo.level}</td>
      <td>{hipo.date}</td>
      <td>{hipo.email}</td>
      <td>{hipo.phone}</td>
      <td>{hipo.reason}</td>
      <td>{hipo.other}</td>
    </tr>
	);
}

export default DataRow
