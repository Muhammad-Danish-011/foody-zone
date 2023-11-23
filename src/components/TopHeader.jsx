import React from 'react'

const TopHeader = () => {
  return (
    <div className='main'>
    <div className='top-header'>
            <img src="../Foody Zone.svg" alt="logo" />       
   </div>
   <div className='middle'>
   <button class="custom-button">All</button>
  <button class="custom-button">Breakfast</button>
  <button class="custom-button">Lunch</button>
  <button class="custom-button">Dinner</button>
  </div>
   <div className='search'>
<input type="text" placeholder='search' />
   </div>
 
   </div>
  
  )
}
 
export default TopHeader
