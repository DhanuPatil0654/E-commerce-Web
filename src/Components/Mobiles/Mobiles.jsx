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

import mobileimg1 from '../../images/Mobiles/mobileimg1.png'
import mobileimg2 from '../../images/Mobiles/mobileimg2.png'
import mobileimg3 from '../../images/Mobiles/mobileimg3.png'

import mobileimg4 from '../../images/Mobiles/mobileimg4.png'
import mobileimg5 from '../../images/Mobiles/mobileimg5.png'
import mobileimg6 from '../../images/Mobiles/mobileimg6.png'



const mobileproduct = [
    {
        productimg: mobileimg1,
        product_title: "ONE PLUS",
        numberstart: 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: mobileimg2,
        product_title: "IPHONE",
        numberstart: 5.1,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: mobileimg3,
        product_title: "SAMSUNG",
        numberstart: 4.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },

    {
        productimg: mobileimg4,
        product_title: "OPPO",
        numberstart: 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: mobileimg5,
        product_title: "REALME",
        numberstart: 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        productimg: mobileimg6,
        product_title: "VIVO",
        numberstart: 3.5,
        para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
]


function Mobiles() {
    return (
        <>
            <Container fluid className='m-0 p-0'>
                <Row>
                    {
                        mobileproduct.map((a) => {
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

export default Mobiles
