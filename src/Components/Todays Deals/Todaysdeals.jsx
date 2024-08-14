import React from 'react'
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

import todaysimg1 from '../../images/Todays Deals/todaysimg1.png'
import todaysimg2 from '../../images/Todays Deals/todaysimg2.png'
import todaysimg3 from '../../images/Todays Deals/todaysimg3.png'

import todaysimg4 from '../../images/Todays Deals/todaysimg4.png'
import todaysimg5 from '../../images/Todays Deals/todaysimg5.png'


const todaysellproduct = [
    {
        productimg: todaysimg1,
        product_title: "LAPTOP",
        numberstart: 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: todaysimg2,
        product_title: "EARBUDS",
        numberstart: 1.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: todaysimg3,
        product_title: "SAMRT WATCHES",
        numberstart: 4.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },

    {
        productimg: todaysimg4,
        product_title: "TABS",
        numberstart: 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: todaysimg5,
        product_title: "FATION",
        numberstart: 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    // {
    //     productimg: bestsellimg7,
    //     product_title: "Charging Cables",
    //     numberstart: 3.5,
    //     para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    // },
    // {
    //     productimg: bestsellimg8,
    //     product_title: "Bags",
    //     numberstart: 3.5,
    //     para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    // },
]


function Todaysdeals() {
    return (
        <>
            <Container fluid className='m-0 p-0'>
                <Row>
                    {
                        todaysellproduct.map((a) => {
                            return (
                                <Col xl={3} lg={3} md={6} sm={12} xs={12} >
                                    <Card className='mb-3 card-shadow '>
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

export default Todaysdeals
