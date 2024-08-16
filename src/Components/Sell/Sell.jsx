import React from 'react'
import './sell.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import sellimg1 from '../../images/Sell img/headimg.jpeg'
import sellimg2 from '../../images/Sell img/mobile.png'
import selling3 from '../../images/Sell img/headimg.avif'
import selling4 from '../../images/Sell img/laptop.png'

import sellimg5 from '../../images/Sell img/tabimg.png'
import sellimg6 from '../../images/Sell img/watchs.png'
import sellimg7 from '../../images/Sell img/toys.png'
import sellimg8 from '../../images/Sell img/grocery.png'

const sellproduct = [
    {
        productimg: sellimg1,
        product_title: "TV",
        numberstart : 2.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: sellimg2,
        product_title: "MOBILE",
        numberstart : 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: selling3,
        product_title: "HEADPHONE",
        numberstart : 1.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: selling4,
        product_title: "LAPTOP",
        numberstart : 4.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },

    {
        productimg: sellimg5,
        product_title: "TABS",
        numberstart : 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: sellimg6,
        product_title: "WATCH",
        numberstart : 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: sellimg7,
        product_title: "TOYS",
        numberstart : 1.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: sellimg8,
        product_title: "GROCERY",
        numberstart : 2.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
]


function Sell() {

    return (
        <>
            <Container fluid className='m-0 p-0'>
                <Row>
                    {
                        sellproduct.map((a) => {
                            return (
                                <Col xl={3} lg={3} md={6} sm={12} xs={12} >
                                    <Card className='mb-3 card-shadow'>
                                        <CardActionArea >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={a.productimg}
                                                alt="green iguana"
                                                className="zoom-image"
                                            />
                                            <CardContent >
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {a.product_title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" >
                                                    <Stack >
                                                        <Rating name="half-rating" defaultValue={a.numberstart} />
                                                    </Stack>
                                                    {a.para}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Sell
