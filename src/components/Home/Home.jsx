
import home from '../Images/Icon-home.png';
import microphone from '../Images/icon-microphone.png';
import setting from '../Images/icon-setting.png';
import bannarImage from '../Images/bannar-image.jpg';
import '../Style/style.css'

const Home = () => {
 return (
    <>
    <header>
      <div className='top-bar'>
         <img src={home} alt="Home Icon" className='home-img'></img>
         <h1>Countries</h1>
         <div className='right-side'>
            <img src={microphone} alt="Microphone Icon"></img>
            <img src={setting} alt="Setting Icon"></img>
         </div>
      </div>
      <img src={bannarImage} alt="World Map" className="bannar-image"></img>
      <div className="input-cont">
      <input type="text" placeholder="🔍 Search Country" className="search-input"></input>
      </div>
    </header>
    </>
 )
}

export default Home;