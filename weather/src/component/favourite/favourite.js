import React from 'react'
import './favourite.css'

const Favourite = () => {
  return (
    <div className='fav-container'>
      <div className='favourite'>
      
      <div className='fav'>
        <img src={require ('../../asset/images/icon_nothing.png')}alt="" />
        <div className='no-favrt-added'>No Favourite added</div>
      </div>

    {/* Displaying the data in favourite */}

    
    </div>
    <div className='favourite-data'>
      <div className='city-added'>6 city added as favourite</div>
      <div className='remove-all'>Remove All</div>
    </div>
    <div className='data'>
      
      <div className='obtained-city'>Udupi,Karnataka</div>
      <div className='obtained-image-data'>
        <img src={require('../../asset/images/icon_mostly_sunny_small.png')} alt="" className='obtn-img'  />
        <div className='obtn-temp'>31</div>
        <div className='c'>c</div>
        <div className='obtn-txt'> Mostly Sunny</div>
      </div>
      <div className='obtn-hrt-img'>
        <img src= {require ('../../asset/images/icon_favourite_Active.png')} alt="" />
      </div>
    </div>
   
    

    </div>
  )
}

export default Favourite