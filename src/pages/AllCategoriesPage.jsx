import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AllCategories from "../components/AllCategories";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../redux/actions/categories/allCategoriesActions";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import LoaderImg from "../components/LoaderImg";

const AllCategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetchAllCategories action
    const res = dispatch(fetchAllCategories());
    console.log(res);
  }, [dispatch]);
  const storeData = useSelector((store) => store.categories);
  const { categories, loading, appErr, serverErr } = storeData;
  // console.log(categories )
  return (
    <>
      <Header />

      {/* Render loading message if categories are loading, otherwise render AllCategories component */}
      {loading && <LoaderImg/>}
      {!loading && !categories && (
        <div style={{ textAlign: "center", marginTop: 300, marginBottom: 300 }}>
          <h1>Something went wrong try again !</h1>
          <Button style={{ backgroundColor: "red" }} onClick={() => dispatch(fetchAllCategories())}>
            Try Again
          </Button>
        </div>
      )}
      {!loading && categories && <AllCategories categories={categories} />}
      <Footer />
    </>
  );
};

export default AllCategoriesPage;
