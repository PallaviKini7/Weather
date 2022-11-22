import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './component/home/home';
import Navbar from './component/navbar/navbar';
import Favourite from './component/favourite/favourite';
import RecentSearch from './component/recentSearch/recentSearch';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={require ('./asset/images/background.png')} alt="" className='image-bg' />
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/favrt' element={<Favourite/>}/>
        <Route path='/recent' element={<RecentSearch/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
