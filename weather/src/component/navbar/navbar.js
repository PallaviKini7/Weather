import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Favourite from '../favourite/favourite'
import RecentSearch from '../recentSearch/recentSearch'
import Home from '../home/home'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { add, weather } from '../../store/userSlice'


const Navbar = () => {

  const dispatch = useDispatch()

  const [search, setsearch] = useState('udupi')
  const [res, setres] = useState([])
  const [value, onChange] = useState("");

  const [time, onChangeTime] = useState("");


useEffect(() => {
  fetch(url, options)
      .then((res) => res.json())
      .then((json) => setres(json))

  
}, [search])

const searchData = JSON.parse(localStorage.getItem("search") || "[]");

if (searchData === undefined) {
  localStorage.setItem("search", "[]");
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
        hour12: true,
      })}`
    );
  };

  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${search}&format=json&u=f`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e725ad90amsh3d5d47978596bc2p1706fajsn48ee22c4fd8c',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  useEffect(() => {
    console.log(res)
    dispatch(weather(res))

  }, [res])




  return (
    <div className='navbar'>
      <div className='logo-img'>
        <img src={require('../../asset/images/logo_web.png')} alt="" />
      </div>
      <div className='search-bar'>
        <form onSubmit={(e)=>{ e.preventDefault();setsearch(e.target.search.value)}}>
          <input type="text" placeholder='Search City' name='search'/>
        </form>
        <i class="fa-solid fa-magnifying-glass" ></i>
      </div>
      <div className='bottom-icons'>
        <div className='compo'>

          <NavLink to={'/home'} className='home-cmp'><div>HOME</div></NavLink>
          <NavLink to={'/favrt'} className='home1'><div>FAVOURITE</div></NavLink>
          <NavLink to={'/recent'} className='home2'><div>RECENT SEARCH</div></NavLink>
        </div>
        <div className='date-display'>
          <div className='date-time'>{value}&nbsp;&nbsp;{time}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar


