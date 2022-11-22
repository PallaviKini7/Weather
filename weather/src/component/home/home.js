import React, {useState} from 'react'
import './home.css'
import Switch from "react-switch";

const Home = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className='home'>
      <div className='city-name'>
        <div className='city'>Udupi, Karnataka</div>
        <div className='add-to-fav'>
          <img src={require ('../../asset/images/icon_favourite.png')} alt="" className='fav-img' />
         <div className='fav-text'>Add to favourite</div>
        </div>
        </div>
        <div className='center-items'>
        <div className='center-icons'>
          <div className='sun-img'>
            <img src={require ('../../asset/images/icon_mostly_sunny.png')} alt="" />
          </div>
          <div className='switch'>
          <div className='temp-text'>87</div>
          <div className='toggle'>
          <Switch
                borderRadius={4}
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                offColor="transparent"
                onColor="transparent"
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      color: "red",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                      zIndex: "2",
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
              />
          </div>
          </div>
          <div className='text-basedon-temp'>
            Mostly Sunny
          </div>

      </div>
      </div>
      <div className='footer'>
        <div className='footer-items'>
          <div className='degree'>
            <img src={require('../../asset/images/icon_temperature_info.png')} alt="" />
            <div className='degree-text'>
              <div className='min-max'>Min-Max</div>
              <div className='digit'>75 - 90</div>
            </div>
          </div>
          <div className='percipitation'>
            <img src={require('../../asset/images/icon_precipitation_info.png')} alt="" />
            <div className='degree-text'>
              <div className='min-max'>Precipitation</div>
              <div className='digit'>0%</div>
            </div>
          </div>
          <div className='humidity'>
            <img src={require('../../asset/images/icon_humidity_info.png')} alt="" />
            <div className='degree-text'>
              <div className='min-max'>Humidity</div>
              <div className='digit'>47%</div>
            </div>
          </div>
          <div className='wind'>
            <img src={require('../../asset/images/icon_wind_info.png')} alt="" />
            <div className='degree-text'>
              <div className='min-max'>Wind</div>
              <div className='digit'>47%</div>
            </div>
          </div>
          <div className='visibility'>
            <img src={require('../../asset/images/icon_visibility_info.png')} alt="" />
            <div className='degree-text'>
              <div className='min-max'>Visibility</div>
              <div className='digit'>47%</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home