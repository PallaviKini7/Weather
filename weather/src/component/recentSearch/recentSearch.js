import React from 'react'
import './recentSearch.css'

const RecentSearch = () => {
  return (
    <div className='recent-search'>
      <div className='rec'>
        <img src={require ('../../asset/images/icon_nothing.png')}alt="" />
        <div className='no-rec-added'>No Recent added</div>
      </div>
    </div>
  )
}

export default RecentSearch