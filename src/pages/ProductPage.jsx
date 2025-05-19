import React, { useEffect, useState } from 'react'
import Header from '../compoments/Header'
import Footer from '../compoments/Footer'
import { useParams } from 'react-router-dom'

import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box, Rating } from '@mui/material';
import { styled } from '@mui/system';


import { getById } from '../service/ProductService'


const AddToBagButton = styled(Button)({
    backgroundColor: '#b71c1c',
    color: '#fff',
    width: '100%',
    '&:hover': {
        backgroundColor: '#8e0000',
    },
});

const WishlistButton = styled(Button)({
    backgroundColor: '#757575',
    color: '#fff',
    width: '100%',
    '&:hover': {
        backgroundColor: '#494949',
    },
});

const PriceBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '10px',
});

const OldPrice = styled(Typography)({
    textDecoration: 'line-through',
    color: 'grey',
    fontSize: '14px',
});

const BookDetail = styled(Typography)({
    marginTop: '16px',
    marginBottom: '16px',
    lineHeight: 1.5,
});

const CustomerFeedback = styled(Box)({
    marginTop: '24px',
});

const SubmitButton = styled(Button)({
    marginTop: '16px',
    backgroundColor: '#1976d2',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#004ba0',
    },
});


const ProductPage = () => {
    const { id } = useParams();

    const [listpro, setListpro] = useState({});

    const getProductbyid = async () => {
        const res = await getById(id);
        console.log(res?.data?.data);
        setListpro(res?.data?.data);
    }
    useEffect(() => {
        getProductbyid();
    }, [])


    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
                <Grid container spacing={2}>
                    {/* Left Side - Product Image and Buttons */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={listpro.img}
                                alt={listpro.name}
                            />
                            <CardContent>
                                <Grid container spacing={1}>
                                    {/* <Grid item xs={6}>
                                        {existb.name === listpro.name ? (
                                            <Typography variant="body2">Already in Bag</Typography>
                                        ) : (
                                            <AddToBagButton variant="contained" onClick={adding}>
                                                ADD TO BAG
                                            </AddToBagButton>
                                        )}
                                    </Grid> */}
                                    <Grid item xs={6}>
                                        <WishlistButton variant="contained">WISHLIST</WishlistButton>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Right Side - listpro Details */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" gutterBottom>
                            {listpro.name}
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            Brand: {listpro.brand}
                        </Typography>

                        <Typography variant="body2" color="textSecondary">
                            Category: {listpro.category}
                        </Typography>

                        <Typography variant="body2" color="textSecondary">
                            Color: {listpro.color}
                        </Typography>

                        <Box display="flex" alignItems="center" my={1}>
                            <Button
                                sx={{
                                    backgroundColor: '#4caf50',
                                    color: '#ffffff',
                                    fontSize: '12px',
                                    padding: '0 6px',
                                    borderRadius: '4px',
                                }}
                            >
                                {listpro.review || '4.5'} ★
                            </Button>
                            <Typography variant="body2" color="textSecondary" ml={1}>
                                ({listpro.quantity || 0})
                            </Typography>
                        </Box>

                        <PriceBox>
                            <Typography variant="h5" color="primary">
                                ₹{listpro.price}
                            </Typography>
                            {listpro.oldPrice && (
                                <OldPrice>₹{product.oldPrice}</OldPrice>
                            )}
                        </PriceBox>

                        <BookDetail variant="body2">
                            <strong>Product Description</strong>
                            <br />
                            {listpro.description}
                        </BookDetail>

                        <CustomerFeedback>
                            <Typography variant="h6">Customer Feedback</Typography>
                            <Typography variant="body2" color="textSecondary">
                                Overall rating
                            </Typography>

                            <Rating name="customer-feedback" defaultValue={0} precision={0.5} />

                            <Box
                                component="textarea"
                                placeholder="Write your review"
                                rows="4"
                                sx={{
                                    width: '100%',
                                    marginTop: '10px',
                                    padding: '8px',
                                    fontFamily: 'inherit',
                                    fontSize: '14px',
                                }}
                            />

                            <SubmitButton variant="contained">Submit</SubmitButton>
                        </CustomerFeedback>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </>
    )
}

export default ProductPage
