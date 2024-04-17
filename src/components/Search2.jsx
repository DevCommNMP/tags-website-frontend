import { useState, useEffect, useRef } from "react";
import "./search2.css";

const dummyData = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Grapes" },
  { id: 5, name: "Strawberry" },
  { id: 6, name: "Pineapple" },
  { id: 7, name: "Watermelon" },
  { id: 8, name: "Mango" },
  { id: 9, name: "Peach" },
  { id: 10, name: "Kiwi" },
];

const Search2 = ( { allProducts } ) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const inputRef = useRef(null);

  console.log(allProducts)
  console.log("allProducts");

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
      const filteredResults = dummyData.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setResults(filteredResults);
      setShowOverlay(true);
    }
  };

/*
  Close overlay when user clicks outside the overlay
  1. When user clicks on the input field, the overlay is shown
  2. When user clicks on the overlay, the overlay is closed
  3. When user clicks on the input field again, the overlay is shown
  4. When user clicks outside the overlay, the overlay is closed
  5. Repeat steps 3 and 4
  
# todo 

*/
  const handleCloseOverlay = () => {
    setShowOverlay(false);
    inputRef.current.blur(); // Remove focus from input field when overlay is closed
  };

  return (
    <>
      <div className="search-style-2">
        <form className="search-form" onClick={() => {
            setShowOverlay(true);
            inputRef.current.focus(); // Set focus on input field when clicked
          }}>
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
          <div className="search-overlay" onClick={() => {
              setShowOverlay(false);
              inputRef.current.blur(); // Remove focus from input field when overlay is clicked
            }}>
            <div className="search-results" onClick={(e) => e.stopPropagation()}>
              <button onClick={handleCloseOverlay} style={{ float: "right" }}>
                Close
              </button>
              <ul>
                {results.map((item, index) => (
                  <li key={index} style={{ fontWeight: "900" }}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search2;
