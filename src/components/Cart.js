import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Grid,
  IconButton,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  Typography,
} from "@mui/material";
import "./Cart.scss";

const Cart = ({
  items,
  removeFromCart,
  showProductDetails,
  handleClose,
  snackbarState,
}) => {
  const { vertical, horizontal, open } = snackbarState;
  const [quantity, setQuantity] = useState(1);
  let grandTotal = 0;

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Grid
      container
      className="products__list--container"
      data-testid="products__list--container"
    >
      {items.length > 0 && (
        <Grid item xs={12} className="my_cart-heading">
          <h1 className="cart_heading">
            <ShoppingBagIcon /> MY CART
          </h1>
        </Grid>
      )}
      <Grid item xs={12}>
        {items.length > 0 ? (
          <>
            {items?.map((item) => {
              const total =
                item.price.substr(1, item.price.length - 1) * quantity;
              grandTotal = total + grandTotal;
              return (
                <Grid
                  item
                  xs={{ maxWidth: 345 }}
                  key={item.id}
                  className="cart-product"
                >
                  <img
                    src={item.image}
                    alt={`${item.name} image`}
                    className="cart--product__media"
                    onClick={(e) => showProductDetails(e, item)}
                  />
                  <Grid item xs className="product_details">
                    <Typography variant="h6">Each</Typography>
                    <Typography>{item.price}</Typography>
                  </Grid>
                  <Grid item xs className="product_details">
                    <Typography variant="h6">Quantity</Typography>
                    <FormControl sx={{ m: 1 }}>
                      <Select
                        value={quantity}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs className="product_details">
                    <Typography variant="h6">Total</Typography>
                    <Typography>{`$ ${total}`}</Typography>
                  </Grid>
                  <Grid item xs className="delete__icon--grid">
                    <IconButton
                      aria-label="delete product"
                      className="delete__icon"
                      onClick={() =>
                        removeFromCart(item, {
                          vertical: "top",
                          horizontal: "center",
                        })
                      }
                    >
                      <DeleteIcon className="delete__btn" />
                    </IconButton>
                  </Grid>
                </Grid>
              );
            })}
            {items.length > 0 && (
              <Grid item xs={12} className="cart-product_total">
                <Grid item xs className="items_number">
                  <Typography variant="h6">{`${items.length} items`}</Typography>
                </Grid>
                <Grid item xs className="items_grandtotal">
                  <Typography variant="h6">{`$ ${grandTotal}`}</Typography>
                </Grid>
              </Grid>
            )}
          </>
        ) : (
          <h2 className="products__not--found">Sorry, Cart is empty! :(</h2>
        )}
      </Grid>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product removed from cart successfully!
          </Alert>
        </Snackbar>
      )}
    </Grid>
  );
};
export default Cart;
