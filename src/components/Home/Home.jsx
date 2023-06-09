import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import '../Style/style.css';
import home from '../Images/Icon-home.png';
import microphone from '../Images/icon-microphone.png';
import setting from '../Images/icon-setting.png';
import countryMap from '../Images/country-map.png';

const Home = () => {
  const { countryItem } = useSelector((store) => store.country);
  const [searchingData, setSearchingData] = useState('');

  const handledata = (event) => {
    setSearchingData(event.target.value);
  };

  const countryFinalItem = countryItem.filter((item) => (
    item.name.toLowerCase().includes(searchingData.toLowerCase())
  ));

  return (
    <>
      <header>

        <div className="top-bar">
          <img src={home} alt="Home Icon" className="home-img" />
          <h1>Countries</h1>
          <div className="right-side">
            <img src={microphone} alt="Microphone Icon" />
            <img src={setting} alt="Setting Icon" />
          </div>
        </div>
        <img src={countryMap} alt="World Map" className="bannar-image" />
        <div className="input-cont">
          <input type="text" placeholder="🔍 Search Country" value={searchingData} onChange={handledata} className="search-input" />
        </div>
      </header>
      <main>
        <div className="status-bar"><h2 className="status-txt">Status by country</h2></div>
        <div className="country-container">
          {countryFinalItem.map((data) => (
            <Link to={`/country/${data.name}`} key={data.name} className="country-item">
              <img src={countryMap} alt="Country Map" className="map-image" />
              <div className="country-info">
                <h3 className="country-name">{data.name}</h3>
                <h3 className="country-population">{data.population}</h3>
              </div>
            </Link>
          ))};
          
        </div>
      </main>

    </>
  );
};

export default Home;
