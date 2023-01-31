import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from "./Products";
import { getCategories } from "../helper/Categories";
import { Typography, Grid } from "@mui/material";
import { responsive } from "../helper/Categories";
import "./Categories.scss";

const Categories = ({ deviceType, favorites, showProductDetails }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getCategories();
      setCategories(res);
    })();
  }, [getCategories]);

  return (
    <>
      {categories ? (
        categories.map((category, index) => (
          <Grid
            container
            key={`${category.id}+${index}`}
            className="carousel__container"
          >
            <Grid className="category__name">
              <Typography
                variant="h4"
                className="category_header"
                align="center"
              >
                {category.name}
              </Typography>
            </Grid>

            <Carousel
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              itemClass="carousel-item-padding-40-px"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              key={category.id}
              deviceType={deviceType}
              navButtonsAlwaysVisible={true}
            >
              <Products
                key={`${category.id}+${index}`}
                items={category.items}
                showProductDetails={showProductDetails}
                favorites={favorites}
              />
            </Carousel>
          </Grid>
        ))
      ) : (
        <h2 className="categories__not--found">No categories found! :(</h2>
      )}
    </>
  );
};

export default Categories;
