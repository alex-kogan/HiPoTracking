import React from 'react'
import downArrow from './down.svg'
import upArrow from './up.svg'
import hide from './none.png'

const Arrow = ({arrowVisual}) => {
  let imageTag = <img src={hide} alt='down arrow' height='10' width='10'/>;
  if (arrowVisual==='ascending')
    imageTag = <img src={upArrow} alt='down arrow' height='10' width='10'/>;
  if (arrowVisual==='decending')
    imageTag = <img src={downArrow} alt='down arrow' height='10' width='10'/>;
  return imageTag
}

export default Arrow
