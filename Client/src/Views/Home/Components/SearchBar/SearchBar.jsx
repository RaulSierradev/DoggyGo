/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWalkerByName, restoreWalkers } from "../../../../Redux/actions";

const SearchBar = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
  };

  const handleSearch = () => {
    dispatch(getWalkerByName(name))
    setName("");
  };

  const handleReset = () => {
    dispatch(restoreWalkers());
  };

  return (
    <div >
      <input
        type='text'
        placeholder='Introduce walker name '
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default SearchBar;
