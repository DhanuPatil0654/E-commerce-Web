
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SnackbarProvider, useSnackbar } from 'notistack';

import '../../CSS/pants/pants.css'
import { CardMedia} from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

import Rating from '@mui/material/Rating';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, CardActions } from '@mui/material';


function Pants() {

  const [pantproducts , setproduct] = useState([])

  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('Product is Add to card..!!', { variant });
  };


  function buynow_product() {
    alert('Product is buy now')
  }

  useEffect(()=>{
    axios.get('http://localhost:5000/getdata')
      .then((res) => setproduct(res.data.data))
      .catch((err) => console.log(err))
  })
  return (
    <>
      <Container fluid className='mt-5 pt-5'>
        <Row>
          {
            pantproducts.map((a) => {
              return (
                <>
                  <Col xl={2} lg={2} md={4} sm={6} xs={6} className='mb-3'>
                    <Card className='cutomcarddetails'>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={`http://localhost:5000/${a.pantimg}`}
                          alt="green iguana"
                          style={{ objectFit: 'contain' }}
                        />
                        <CardContent>
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom component="div" className='custom-card-content'>
                              {a.pant_name}
                            </Typography>
                            <Typography gutterBottom component="div">
                            <i class="fa-solid fa-indian-rupee-sign"></i>-{a.price}
                            </Typography>
                          </Stack>
                          <Typography variant="body2" color="text.secondary" className='custom-card-desc'>
                            {a.pant_desc}
                          </Typography>
                          <hr></hr>
                          <Chip className="limited-deal-chip" label="Limited Deal" size="small" />
                          <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2} precision={a.precision_rating} readOnly />
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
      <Pants />
    </SnackbarProvider>
  );
}





