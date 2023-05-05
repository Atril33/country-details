import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { countryDataFetch } from './Redux/country/countrySlice';
import Home from './components/Home/Home';
import InfoPage from './components/InfoPage/InfoPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(countryDataFetch());
  });
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<InfoPage />} />
    </Routes>
  );
}

export default App;
