import React from 'react'
import './favourite.css'

const Favourite = () => {
  return (
    <div className='favourite'>
      
      <div className='fav'>
        <img src={require ('../../asset/images/icon_nothing.png')}alt="" />
        <div className='no-favrt-added'>No Favourite added</div>
      </div>
    </div>
  )
}

export default Favourite