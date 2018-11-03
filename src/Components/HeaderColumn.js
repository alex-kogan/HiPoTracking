import React from 'react'
import Arrow from './Arrow.js'
import './HeaderColumn.css'

export const HeaderColumn = ({title, headerClick, sortTableBy}) => {
	let arrowVisual = 'hide';
	if (title===sortTableBy[0]) {
		arrowVisual = sortTableBy[1];
	}

	return (
		<th onClick={headerClick} direction='ascending'>
			{title}
			<Arrow arrowVisual={arrowVisual}/>
		</th>
	);
}

const StringCompare = (keyText,direction) => {
  return (objectA, objectB) => {
    const stringA = objectA[keyText].toUpperCase(); // ignore upper and lowercase
    const stringB = objectB[keyText].toUpperCase(); // ignore upper and lowercase
    if (stringA < stringB) {
      return -1*direction;
    }
    if (stringA > stringB) {
      return 1*direction;
    }

    // names must be equal
    return 0;
  }
}

const DateCompare = (keyText,direction) => {
  return (objectA, objectB) => {
    const dateA = new Date(objectA[keyText]).getTime();
    const dateB = new Date(objectB[keyText]).getTime();
    return (dateA-dateB)*direction;
  }
}

const NumCompare = (keyText) => {
  return (objectA, objectB) => {
    return (objectA[keyText]-objectB[keyText]);
  }
}

export const SortByHeader = (header, direction) => {
	const keyLegend = [
		['First name','firstName'],
		['Last name', 'lastName'],
		['School', 'school'],
		['Major','major'],
		['Prefferd office', 'office'],
		['Start level', 'level'],
	];
    const numDirection = (direction==='ascending')  ? 1 : -1;
    switch (header) {
      case "First name":
      case "Last name":
      case "School": 
      case "Major": 
      case "Prefferd office": 
      case "Start level": 
		return(StringCompare(keyLegend.filter((key) => key[0] === header)[0][1],numDirection));
      case "Start date": 
          return(DateCompare('date',numDirection));
      default:
        return(NumCompare('id'));
    }
}
