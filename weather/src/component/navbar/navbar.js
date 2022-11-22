import React, { useState } from 'react'
import './navbar.css'
import { Routes, Route,NavLink } from 'react-router-dom'
import Favourite from '../favourite/favourite'
import RecentSearch from '../recentSearch/recentSearch'
import Home from '../home/home'


const Navbar = () => {

  const [search, setsearch] = useState('')
  const [value, onChange] = useState("");

  const [time, onChangeTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)

  }

  const date = new Date();
  setInterval(function () {

    today();

  }, 1000);
  setInterval(function () {

    todayTime();

  }, 1000);
  const today = () => {

    onChange(

      `${date.toLocaleString("en-us", {

        weekday: "short",

      })} ${date.getDate()}, ${date.toLocaleString("en-us", {

        month: "short",

      })} ${date.getFullYear()} `

    );

  };
  const todayTime = () => {

    onChangeTime(

      ` ${date.toLocaleString("en-US", {

        hour: "numeric",

        minute: "numeric",

        // second: "numeric",

        hour12: true,

      })}`

    );

  };

  return (
    <div className='navbar'>
      <div className='logo-img'>
        <img src={require('../../asset/images/logo_web.png')} alt="" />
      </div>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Search City' value={search} onChange={(e) => setsearch(e.target.value)} />
        </form>
        <i class="fa-solid fa-magnifying-glass" ></i>
      </div>
      <div className='bottom-icons'>
        <div className='compo'>
          <NavLink to={'/home'} className='home-cmp'><div>Home</div></NavLink>
          <NavLink to={'/favrt'} className='home1'><div>FAVOURITE</div></NavLink>
          <NavLink to={'/recent'} className='home2'><div>RECENT SEARCH</div></NavLink>

        </div>
        <div className='date-display'>
          <div className='date-time'>{value}&nbsp;&nbsp;{time}</div>

        </div>

      </div>
      {/* <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/favrt' element={<Favourite />} />
        <Route path='/recent' element={<RecentSearch />} />
      </Routes> */}
    </div>
  )
}

export default Navbar


