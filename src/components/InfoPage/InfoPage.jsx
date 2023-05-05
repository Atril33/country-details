import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import setting from '../Images/icon-setting.png';
import microphone from '../Images/icon-microphone.png';
import back from '../Images/icon-back.png';

const InfoPage = () => {
  const { name } = useParams();

  const { countryItem } = useSelector((store) => store.country);
  const getName = countryItem.find((item) => item.name === name);
  return (
    <>
      <div className="top-bar">
        <Link to="/"><img src={back} alt="Home Icon" className="home-img" /></Link>
        <h1>{getName.name}</h1>
        <div className="right-side">
          <img src={microphone} alt="Microphone Icon" />
          <img src={setting} alt="Setting Icon" />
        </div>
      </div>
      <div className="info-container">
        <div className="image-container">
          <img src={getName.flag} alt={getName.name} className="flag-image" />
        </div>
        <div className="info-statusBar"><h3 className="info-statusTxt">CITY/TOWN BREAKDOWN - 2023</h3></div>
        <h2 className="info-txt">
          <span>Name</span>
          {getName.name ? getName.name : 'none'}
        </h2>
        <h2 className="info-txt">
          <span>Capital</span>
          {getName.capital ? getName.capital : 'none'}
        </h2>
        <h2 className="info-txt">
          <span>Continent</span>
          {getName.continent ? getName.continent : 'none'}
        </h2>
        <h2 className="info-txt">
          <span>Population</span>
          {getName.population ? getName.population : 'none'}
        </h2>
        <h2 className="info-txt">
          <span>Area</span>
          {getName.area ? getName.area : 'none'}
          km²
        </h2>
        <h2 className="info-txt">
          <span>Google Map</span>
          <a href={getName.map}>Map</a>
        </h2>
      </div>
    </>
  );
};

export default InfoPage;
