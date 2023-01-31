import React from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './ProductDetails.scss';

export const ProductDetails = ({ addToFavorites, favorites }) => {
    const { state } = useLocation();
    const { item } = state;
    const isfavorite = favorites.find(
      (favorite) => favorite.id === item.id,
    )
    return (
        <Grid container className='product_detail-container'>
            <Grid item xs={12} md={6} mt={4} className = "product_detail--img-grid" >
                <img src={item.image} alt="" />
            </Grid>
            <Grid item xs={12} md={6} mb={4} >
                <Grid item mb={4}>
                    <h1>{item.name}</h1>
                    <Button className="CheckButton" onClick={() => addToFavorites(item)} variant="outlined">
                        {isfavorite ? 'Wishlisted' : 'Add to Wishlist'}
                    <FavoriteIcon />
                    </Button>
                </Grid>
                <Grid item mr={4}>
                    {item.description && <Typography variant="body1" className="product_description" >{item.description}</Typography>}
                    {item.price && 
                    <Grid item className="product_price-label"><h4 className='price_label'>Price: </h4><Typography variant="body1" className="product_price" >{item.price}</Typography></Grid>}
                </Grid>
            </Grid>
            {item.specifications && <Grid item xs={12} mt={4} mr={4} ml={4}>
                <h4 className="specifications_title">Specifications:</h4>
                <Typography variant="body1" className="specifications_description" >{item.specifications}</Typography>
            </Grid>}
        </Grid>
    )
}
