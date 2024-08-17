
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import '../../CSS/Shoes/shoes.css'
import { CardMedia, useScrollTrigger } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

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


import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


import axios from 'axios';

function Shoes() {

  // const [product , setproduct] = useState([])

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function buynow_product() {
    alert('Product is buy now')
  }

  // useEffect(()=>{
  //   axios.get('http://localhost:5000/getdata')
  //     .then((res) => setproduct(res.data.data))
  //     .catch((err) => console.log(err))
  // })

  const pants_data = [
    {
      pantimg: shoesimg1,
      pant_name: "Campus",
      pant_desc: "North Plus Sports Running Walking Gym Shoes for Men | Comfortable Shoes for Men with Vamp Upper for Airflow | Stylish Lace-Up Closure | Men's Shoes with Air Capsule Unit",
      price: 1234
    },
    {
      pantimg: shoesimg2,
      pant_name: "Campus",
      pant_desc: "Men's Harley Running Shoes",
      precision_rating: 4,
      price: 799
    },
    {
      pantimg: shoesimg3,
      pant_name: "Campus",
      pant_desc: "Abacus Running Walking Jogging Workout Shoes for Men | Stylish Shoes with Knitted & Light Weight Upper, Support Tech and Memory Foam Insole",
      precision_rating: 1,
      price: 975
    },
    {
      pantimg: shoesimg4,
      pant_name: "Campus",
      pant_desc: " First Running Walking Jogging Walking Gym Shoes for Men | Sports Shoes for Men with a Cushioned Insole and Revolutionary Ball Tech Unit | Mesh Upper & Secure Lace-Up Closure",
      precision_rating: 2,
      price: 1975
    },
    {
      pantimg: shoesimg5,
      pant_name: "ASIAN",
      pant_desc: "Men's Wonder-13 Sports Running Shoes…",
      precision_rating: 2,
      price: 575
    },
    {
      pantimg: shoesimg6,
      pant_name: "Campus",
      pant_desc: "mens Oxyfit (N) Walking Shoe",
      precision_rating: 4,
      price: 1375
    },
    {
      pantimg: shoesimg7,
      pant_name: "SPARX",
      pant_desc: "Mens Sx0675g Walking Shoe",
      precision_rating: 4,
      price: 5000
    },
    {
      pantimg: shoesimg8,
      pant_name: "Liberty",
      pant_desc: "mens Roger-e Sneaker",
      precision_rating: 3,
      price: 3405
    },
    {
      pantimg: shoesimg9,
      pant_name: "LANCER",
      pant_desc: "Men's Sports Running Shoes Indus-251",
      precision_rating: 3,
      price: 2500
    },
    {
      pantimg: shoesimg10,
      pant_name: "ASIAN",
      pant_desc: "Men's Everest-02 Sports Trekking & Hiking,Walking Shoes with Rubber Outsole & Memory Foam Insole Lace-Up Shoes for Men's & Boy's",
      precision_rating: 2,
      price: 2600
    },
    {
      pantimg: shoesimg11,
      pant_name: "Campus",
      pant_desc: "Hurricane Men's Running Walking Gym Shoes | Men's Shoes with Breathable Mesh Upper and Anti-Slip Outsole | Extra Supportive Memory Foam Insole",
      precision_rating: 4,
      price: 3520
    },
    {
      pantimg: shoesimg13,
      pant_name: "Campus",
      pant_desc: "Men's HARVEL PRO Walking Shoes",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: shoesimg12,
      pant_name: "ASIAN",
      pant_desc: "Men's ZIGZAG-01 Sport Running,Walking,Gym Shoes with Cushioning Material,Extra Jump Lightweight Shoes TPR Outsole with Memory Foam Insole Casual Shoes for Men's & Boy's",
      precision_rating: 4,
      price: 1975
    },
  ]
  return (
    <>
      <Container fluid className='mt-5 pt-5 '>
        <Row>
          {
            pants_data.map((a) => {
              return (
                <>
                  <Col xl={2} lg={2} md={4} sm={6} xs={6} className='mb-3'>
                    <Card variant="outlined" className='customercard'>
                      <Box sx={{ p: 2 }}>
                        <CardMedia
                          component="img"
                          alt="pant image"
                          height="200"
                          // image={`http://localhost:5000/${a.image}`}
                          image={a.pantimg}
                          style={{ objectFit: 'contain' }}
                        />
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography gutterBottom component="div" className='custom-card-content'>
                            {a.pant_name}
                          </Typography>
                          <Typography gutterBottom component="div">
                            <i class="fa-solid fa-indian-rupee-sign"></i>- {a.price}
                          </Typography>
                        </Stack>
                        <Typography color="text.secondary" variant="body2" className='custom-card-desc'>
                          {a.pant_desc}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box sx={{ p: 2 }}>
                        <Chip className="limited-deal-chip" label="Limited Deal" size="small" />
                        <Typography gutterBottom variant="body2">
                          <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2} precision={a.precision_rating} readOnly />
                          </Stack>
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <Chip color="primary" label="Buy Now" size="small" onClick={buynow_product} />
                          <Chip label="Add To Card" size="small" onClick={handleClick} />
                        </Stack>
                      </Box>
                    </Card>
                  </Col>
                </>
              )
            })
          }
        </Row>
      </Container>

      {/* Alert msg for add to card */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Product Added to Card..!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Shoes
