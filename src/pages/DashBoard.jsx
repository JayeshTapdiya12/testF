import React, { useEffect, useState } from 'react'
import Header from '../compoments/Header'
import Footer from '../compoments/Footer'

import { getProducts } from '../service/ProductService'
import { Link, useParams } from 'react-router-dom'
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Cart from './Cart'
const Price = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
}));

const OldPrice = styled(Typography)(({ theme }) => ({
    textDecoration: 'line-through',
    color: 'grey',
    fontSize: '14px',
}));

const RatingButton = styled(Box)(({ theme }) => ({
    backgroundColor: '#4caf50',
    color: '#ffffff',
    fontSize: '12px',
    padding: '0 6px',
    borderRadius: '4px',
    display: 'inline-block',
}));
const DashBoard = () => {

    const [listpro, setListpro] = useState([]);
    const { id } = useParams();

    const getallProduct = async () => {
        const res = await getProducts();
        console.log(res?.data?.data);
        setListpro(res?.data?.data)
    }
    useEffect(() => {
        getallProduct();

    }, [])

    return (
        <>
            <Header />
            <Cart />
            <Container maxWidth="lg" sx={{ paddingTop: '2rem' }}>
                <Grid container spacing={2} justifyContent="center">
                    {listpro.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                                <Card sx={{ maxWidth: 300, margin: '0 auto', boxShadow: 3 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product.img} // Ensure this is a valid image URL or base64 string
                                        alt={product.name}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" component="div" gutterBottom>
                                            {product.name}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary">
                                            Brand: {product.brand}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary">
                                            Category: {product.category}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary">
                                            Color: {product.color}
                                        </Typography>

                                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                                            {product.description}
                                        </Typography>

                                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                                            <Typography variant="h6" color="primary">
                                                ₹{product.price}
                                            </Typography>

                                            {product.review && (
                                                <Typography variant="body2" color="textSecondary">
                                                    ⭐ {product.review}
                                                </Typography>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
export default DashBoard
