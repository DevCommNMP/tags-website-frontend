import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import "./search2.css";

const Search2 = ({ data }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.keyCode === 27) {
        setShowOverlay(false);
      }
    };

    window.addEventListener("keydown", handleEscKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = data.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setResults(filteredResults);
      setShowOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    inputRef.current.blur();
  };

  return (
    <>
      <div className="search-style-2">
        <form
          className="search-form"
          onClick={() => {
            setShowOverlay(true);
            inputRef.current.focus();
          }}
        >
          <i className="fi-rs-search" style={{ margin: "0px 10px", fontSize: "18px" }}></i>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for items..."
          />
        </form>

        {showOverlay && (
          <div className="search-overlay" onClick={handleCloseOverlay}>
            <div className="search-results" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleCloseOverlay} style={{ float: "right" }}>
                Close
              </button>
              <ul>
                {results.map((item) => (
                  <li key={item.id} style={{ fontWeight: "900" }}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <ProductCard />
          </div>
        )}
      </div>
    </>
  );
};

export default Search2;
