import { useState } from "react";

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

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = dummyData.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
      setResults(filteredResults);
    }
  };

  return (
    <>
      <div className="search-style-2" style={{ margin: "0px 40px", position: "relative" }}>
        <form style={{ alignItems: "center", width: "100%", border: "1px solid #aaa", borderRadius: "20px" }}>
          <i className="fi-rs-search" style={{ margin: "0px 10px", fontSize: "18px" }}></i>
          <input
            type="text"
            style={{ width: "100%", border: "none" }}
            value={query}
            onChange={handleInputChange}
            placeholder="Search for items..."
          />
        </form>

        {query.trim() !== "" && (
          <ul
            style={{
              position: "absolute",
              zIndex: "40",
              backgroundColor: "#ffffffee",
              width: "100%",
              borderRadius: " 20px",
              padding: "20px 40px",
            }}
          >
            {results.map((item, index) => (
              <li key={index} style={{ fontWeight: "900" }}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;
