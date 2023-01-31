import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { ProductDetails } from "./components/ProductDetails";
import Products from "./components/Products";
import "./App.scss";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const addToFavorites = (item) => {
    const favoriteExists = favorites.find(
      (favorite) => favorite.id === item.id
    );

    if (!favoriteExists) {
      setFavorites([...favorites, item]);
    } else {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== item.id
      );
      setFavorites([...newFavorites]);
    }
  };

  const showProductDetails = (e, item) => {
    e.preventDefault();
    navigate("/productDetails", { state: { item: item } });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Categories
              deviceType="desktop"
              favorites={favorites}
              showProductDetails={showProductDetails}
              addToFavorites={addToFavorites}
            />
          }
        />
        <Route
          path="/productDetails"
          element={
            <ProductDetails
              addToFavorites={addToFavorites}
              favorites={favorites}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Products
              items={favorites}
              showProductDetails={showProductDetails}
              favorites={favorites}
              addToFavorites={addToFavorites}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
