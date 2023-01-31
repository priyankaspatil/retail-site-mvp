import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Grid,
  IconButton,
  CardActions,
  CardMedia,
  Card,
  Snackbar,
  Alert,
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
  return (
    <Grid
      container
      className="products__list--container"
      data-testid="products__list--container"
    >
      {items.length > 0 ? (
        items?.map((item) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={item.id} className="card-product">
              <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt={item.name}
                className="card--product__media"
                onClick={(e) => showProductDetails(e, item)}
              />
              <CardActions disableSpacing>
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
              </CardActions>
            </Card>
          );
        })
      ) : (
        <h2 className="products__not--found">Sorry, Cart is empty! :(</h2>
      )}
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
