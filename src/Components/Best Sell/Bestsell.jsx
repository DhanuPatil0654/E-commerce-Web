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

import bestsellimg2 from '../../images/Sell img/mobile.png'
import bestsellimg3 from '../../images/Sell img/headimg.avif'
import bestsellimg4 from '../../images/Sell img/laptop.png'

import bestsellimg5 from '../../images/Sell img/tabimg.png'
import bestsellimg6 from '../../images/Sell img/watchs.png'
import bestsellimg7 from '../../images/Best sell/charging.png'
import bestsellimg8 from '../../images/Best sell/bags.png'


const bestsellproduct = [
  {
    productimg: bestsellimg2,
    product_title: "MOBILE",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: bestsellimg3,
    product_title: "HEADPHONE",
    numberstart: 1.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: bestsellimg4,
    product_title: "LAPTOP",
    numberstart: 4.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },

  {
    productimg: bestsellimg5,
    product_title: "TABS",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: bestsellimg6,
    product_title: "WATCH",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: bestsellimg7,
    product_title: "Charging Cables",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
  {
    productimg: bestsellimg8,
    product_title: "Bags",
    numberstart: 3.5,
    para: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
  },
]


function Bestsell() {
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

export default Bestsell
