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

import img1 from '../../images/Fasion/img1.png'
import img2 from '../../images/Fasion/img2.png'
import img3 from '../../images/Fasion/img3.png'

import img4 from '../../images/Fasion/img4.png'
import img5 from '../../images/Fasion/img5.png'
import img6 from '../../images/Fasion/img6.png'



const bestsellproduct = [
  {
    productimg: img1,
    product_title: "Ushering in a New Era of Hollywood Style",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: img2,
    product_title: " Dressing for the compaign Trail",
    numberstart: 1.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: img3,
    product_title: "The Best Vintage Stores in Dallas Fort Worth",
    numberstart: 4.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },

  {
    productimg: img4,
    product_title: "The Best Vintage Stores in Milan",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: img5,
    product_title: "The Best Vintage Stores in Beirut",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: img6,
    product_title: "The Best Vintage Stores in Tokyo",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
]


function Fastion() {
    return (
        <>
            <Container fluid className='m-0 p-0'>
                <Row>
                    {
                        bestsellproduct.map((a) => {
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

export default Fastion
