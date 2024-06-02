import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
const navigate=useNavigate();
  useNavigate
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      return;
    } 
    
  };
  const submitHandler=()=>{
    navigate(`/search/${query.toLowerCase()}`);
  }


  return (
    <>
      <div className="search-style-2" style={{ margin: "0px 40px", position: "relative" }}>
        <form style={{ alignItems: "center", width: "100%", border: "1px solid #aaa", borderRadius: "20px" }} onSubmit={submitHandler}>
          <i className="fi-rs-search" style={{ margin: "0px 10px", fontSize: "18px" }}></i>
          <input
            type="text"
            style={{ width: "100%", border: "none" }}
            value={query}
            onChange={handleInputChange}
            placeholder="Search for items..."
          />
        </form>

      </div>
    </>
  );
};

export default Search;
