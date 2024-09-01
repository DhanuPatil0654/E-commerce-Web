
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';

import '../../CSS/Shoes/shoes.css'
import { CardMedia } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import Chip from '@mui/material/Chip';

import shoesimg1 from '../../images/Shoes img/shoe1.png'
import shoesimg2 from '../../images/Shoes img/shoes2.png'
import shoesimg3 from '../../images/Shoes img/shoes3.png'
import shoesimg4 from '../../images/Shoes img/shoes4.png'
import shoesimg5 from '../../images/Shoes img/shoes5.png'

import shoesimg6 from '../../images/Shoes img/shoes6.png'
import shoesimg7 from '../../images/Shoes img/shoes7.png'
import shoesimg8 from '../../images/Shoes img/shoes8.png'
import shoesimg9 from '../../images/Shoes img/shoes9.png'
import shoesimg10 from '../../images/Shoes img/shoes10.png'

import shoesimg11 from '../../images/Shoes img/shoes11.png'
import shoesimg12 from '../../images/Shoes img/shoes13.png'
import shoesimg13 from '../../images/Shoes img/shoes14.png'

import { SnackbarProvider, useSnackbar } from 'notistack';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import axios from 'axios';

function Shoes() {

  const [shoesproducts , setproduct] = useState([])
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('Product is Add to card..!!', { variant });
  };

  
  function buynow_product() {
    alert('Product is buy now')
  }

  
  useEffect(()=>{
    axios.get('http://localhost:5000/shoes_getdata')
      .then((res) => setproduct(res.data.data))
      .catch((err) => console.log(err))
  })

  return (
    <>
      <Container fluid className='mt-5 pt-5'>
        <Row>
          {
            shoesproducts.map((a) => {
              return (
                <>
                  <Col xl={2} lg={2} md={4} sm={6} xs={6} className='mb-3'>
                    <Card className='cutomcarddetails'>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={`http://localhost:5000/${a.shoesimg}`}
                          alt="green iguana"
                          style={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom component="div" className='custom-card-content'>
                              {a.shoes_name}
                            </Typography>
                            <Typography gutterBottom component="div">
                            <i class="fa-solid fa-indian-rupee-sign"></i>-{a.price}
                            </Typography>
                          </Stack>
                          <Typography variant="body2" color="text.secondary" className='custom-card-desc'>
                            {a.shoes_desc}
                          </Typography>
                          <hr></hr>
                          <Chip className="limited-deal-chip" label="Limited Deal" size="small" />
                          <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2} precision={a.shoes_rating} readOnly />
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className='p-2 mb-2'>
                        <Stack direction="row" spacing={1}>
                          <Chip color="primary" label="Buy Now" size="small" onClick={buynow_product} />
                          <Chip label="Add To Card" size="small" onClick={handleClickVariant('success')} />
                        </Stack>
                      </CardActions>
                    </Card>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Shoes />
    </SnackbarProvider>
  );
}
