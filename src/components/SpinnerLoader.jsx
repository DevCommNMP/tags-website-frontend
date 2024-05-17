import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
// import fetchDataFromAPI from './api'; // Your API fetching function

const SpinnerLoader = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDataFromAPI().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {/* Other content */}
      {loading ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
      ) : (
        <div>
          {/* Render your content once data is loaded */}
          {data && <p>{data}</p>}
        </div>
      )}
    </div>
  );
};

export default SpinnerLoader;
