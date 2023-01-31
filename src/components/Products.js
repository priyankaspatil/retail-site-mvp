import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid, IconButton, CardActions, CardMedia, Card } from "@mui/material";
import "./Products.scss";

const Products = ({ items, showProductDetails, favorites, addToFavorites }) => {
  return (
    <Grid
      container
      className="products__list--container"
      data-testid="products__list--container"
    >
      {items.length > 0 ? (
        items?.map((item) => {
          const isfavorite = favorites.find(
            (favorite) => favorite.id === item.id
          );
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
                  aria-label="add to favorites"
                  onClick={() => addToFavorites(item)}
                >
                  <FavoriteIcon
                    className={isfavorite ? "like" : ""}
                    style={{ color: isfavorite ? "red" : "gray" }}
                  />
                </IconButton>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <h2 className="products__not--found">No Products Found! :(</h2>
      )}
    </Grid>
  );
};
export default Products;
