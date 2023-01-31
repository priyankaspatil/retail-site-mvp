import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Header from "./components/Header";
import { ProductDetails } from "./components/ProductDetails";
import Products from "./components/Products";
import Cart from "./components/Cart";
import "./App.scss";

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    isAdded: false,
  });
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

  const addToCart = (item, snackbarValue) => {
    const productExists = cartProducts.find(
      (product) => product.id === item.id
    );
    if (!productExists) {
      setCartProducts([...cartProducts, item]);
      setSnackbarState({ open: true, isAdded: true, ...snackbarValue });
    } else {
      const newProductList = cartProducts.filter(
        (product) => product.id !== item.id
      );
      setCartProducts([...newProductList]);
      setSnackbarState({ open: true, isAdded: false, ...snackbarValue });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarState({ ...snackbarState, open: false, isAdded: false });
  };

  const removeFromCart = (item, snackbarValue) => {
    const productExists = cartProducts.find(
      (product) => product.id === item.id
    );
    if (productExists) {
      const newProductList = cartProducts.filter(
        (product) => product.id !== item.id
      );
      setCartProducts([...newProductList]);
      setSnackbarState({ open: true, isAdded: false, ...snackbarValue });
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
              addToCart={addToCart}
              handleClose={handleClose}
              cartProducts={cartProducts}
              snackbarState={snackbarState}
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
        <Route
          path="/myShoppingCart"
          element={
            <Cart
              items={cartProducts}
              showProductDetails={showProductDetails}
              removeFromCart={removeFromCart}
              handleClose={handleClose}
              snackbarState={snackbarState}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
