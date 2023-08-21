/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const URL = "http://localhost:3001/user/";

const SearchBar = ({handleResetFilterOrder}) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const walkers = useSelector(state => state.walkers)

  const onSearch = async (name) => {
    try {
        //! Ver la ruta exacta
      const searchURL = URL + `name/${name}`;
      const { data } = await axios(searchURL);

      const countryRepeted = walkers.find(
        (country) => country.ID === data.ID
      );

      if (countryRepeted)
        return alert("You already added a country with that ID");

      dispatch(removeMyCountries());
      dispatch(searchCountry(data));
      handleResetFilterOrder()
    } catch (error) {
      error.response && error.response.data
        ? alert(error.response.data)
        : alert(error.message);
    }
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  };

  const handleSearch = () => {
    onSearch(name);
    setName("");
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * allCountries.length);
    const { name } = allCountries[randomIndex];
    onSearch(name);
    setName("");
  };

  const handleReset = () => {
    dispatch(resetCountries());
    handleResetFilterOrder()
  };

  return (
    <div >
      <input
        type='text'
        placeholder='Introduce country name '
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleRandom}>Random</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default SearchBar;
