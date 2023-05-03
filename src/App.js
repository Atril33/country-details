import { useDispatch } from "react-redux";
import { countryDataFetch } from "./Redux/country/countrySlice";
import { useEffect } from "react";
import Home from "./components/Home/Home";


function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(countryDataFetch());
});
  return (
  <Home />
  );
}

export default App;
