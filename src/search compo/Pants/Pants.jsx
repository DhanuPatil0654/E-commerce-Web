// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// import '../../CSS/pants/pants.css'
// import { Col, Container, Row } from 'react-bootstrap';

// import pantimg1 from '../../images/Pants/pant_formal1.png'
// import pantimg2 from '../../images/Pants/pantfrom2.png'
// import pantimg3 from '../../images/Pants/pantimg3.png'
// import pantimg4 from '../../images/Pants/pantimg4.png'
// import pantimg5 from '../../images/Pants/pantimg5.png'

// import pantimg6 from '../../images/Pants/pantimg6.png'
// import pantimg7 from '../../images/Pants/pantimg7.png'
// import pantimg8 from '../../images/Pants/pantimg8.png'
// import pantimg9 from '../../images/Pants/pantimg9.png'
// import pantimg10 from '../../images/Pants/pantimg10.png'

// import pantimg11 from '../../images/Pants/pantimg11.png'
// import pantimg12 from '../../images/Pants/pantimg12.png'

// import Rating from '@mui/material/Rating';
// import Stack from '@mui/material/Stack';




// function Pants() {



//   const pants_data = [
//     {
//       pantimg: pantimg1,
//       pant_name: "The Pant Project",
//       pant_desc: "The Pant Project Luxury PV Lycra Stretchable Formal Pants for Men | Stylish Slim Fit Men's Wear Trousers for Office or Party | Mens Fashion Dress Trouser Pant",
//       precision_rating: 3
//     },
//     {
//       pantimg: pantimg2,
//       pant_name: "Amazon Brand - Symbol",
//       pant_desc: "Amazon Brand - Symbol Men's Stretchable Formal Pants | Trousers (Slim Fit)",
//       precision_rating: 4
//     },
//     {
//       pantimg: pantimg3,
//       pant_name: "Lymio",
//       pant_desc: "Lymio Track Pant for Men || Track Pants || Plain Track Pant (Track-06-08)",
//       precision_rating: 1
//     },
//     {
//       pantimg: pantimg4,
//       pant_name: "Lymio",
//       pant_desc: "Men Regular Fit Pants",
//       precision_rating: 2
//     },
//     {
//       pantimg: pantimg5,
//       pant_name: "Lymio",
//       pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-38-41)",
//       precision_rating: 2
//     },
//     {
//       pantimg: pantimg6,
//       pant_name: "AVANOVA",
//       pant_desc: "Men's Trouser II Men's Regular Casual Pants II Men's Regular Fit Casual Trouser (Trousers-121)",
//       precision_rating: 4
//     },
//     {
//       pantimg: pantimg7,
//       pant_name: "Lymio",
//       pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)",
//       precision_rating: 4
//     },
//     {
//       pantimg: pantimg8,
//       pant_name: "TOPLOT",
//       pant_desc: "TOPLOT Men's Regular Fit Causal Trouser",
//       precision_rating: 3
//     },
//     {
//       pantimg: pantimg9,
//       pant_name: "JVX",
//       pant_desc: "JVX Men Trouser || Men Trouser Pants || Men Trouser Pants Cotton || Trouser for Men(Trouser)",
//       precision_rating: 3
//     },
//     {
//       pantimg: pantimg10,
//       pant_name: "Lymio",
//       pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cago-22-25)",
//       precision_rating: 2
//     },
//     {
//       pantimg: pantimg11,
//       pant_name: "Symbol Premium",
//       pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-13-16)",
//       precision_rating: 4
//     },
//     {
//       pantimg: pantimg12,
//       pant_name: "AVANOVA",
//       pant_desc: "Men's Trouser II Men's Regular Casual Pants II Men's Regular Fit Casual Trouser (Trousers-120)",
//       precision_rating: 4
//     }
//   ]

//   return (
//     <>
//       <Container fluid className='mt-5 pt-5'>
//         <Row>
//           {
//             pants_data.map((a) => {
//               return (
//                 <>
//                   <Col xl={2} lg={2} md={4} sm={6} xs={6} className='mb-3'>
//                     <Card className='customercard'>
//                       <CardMedia
//                         component="img"
//                         alt="pant image"
//                         height="200"
//                         image={a.pantimg}
//                         style={{ objectFit: 'contain' }}
//                       />
//                       <CardContent className='custom-card-content'>
//                         <Typography gutterBottom variant="h6" component="div" className='text-center'>
//                           <b>{a.pant_name}</b>
//                         </Typography>
//                         <Stack spacing={1}>
//                           <Rating name="half-rating-read" defaultValue={2} precision={a.precision_rating} readOnly />
//                         </Stack>
//                         <Typography variant="body2" color="text.secondary" className='custom-card-desc'>
//                           {a.pant_desc}
//                           <p className='deals mt-2'>Limited Time Deal</p>
//                         </Typography>
//                       </CardContent>
//                       <CardActions>
//                         <Button size="small">Share</Button>
//                         <Button size="small">Learn More</Button>
//                       </CardActions>
//                     </Card>
//                   </Col>

//                 </>
//               )
//             })
//           }

//         </Row>
//       </Container>

//     </>
//   )
// }

// export default Pants








import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import '../../CSS/pants/pants.css'
import { CardMedia, useScrollTrigger } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';

import pantimg1 from '../../images/Pants/pant_formal1.png'
import pantimg2 from '../../images/Pants/pantfrom2.png'
import pantimg3 from '../../images/Pants/pantimg3.png'
import pantimg4 from '../../images/Pants/pantimg4.png'
import pantimg5 from '../../images/Pants/pantimg5.png'

import pantimg6 from '../../images/Pants/pantimg6.png'
import pantimg7 from '../../images/Pants/pantimg7.png'
import pantimg8 from '../../images/Pants/pantimg8.png'
import pantimg9 from '../../images/Pants/pantimg9.png'
import pantimg10 from '../../images/Pants/pantimg10.png'

import pantimg11 from '../../images/Pants/pantimg11.png'
import pantimg12 from '../../images/Pants/pantimg12.png'
import pantimg13 from '../../images/Pants/pantimg13.png'
import pantimg14 from '../../images/Pants/pantimg14.png'
import pantimg15 from '../../images/Pants/pantimg15.png'
import pantimg16 from '../../images/Pants/pantimg16.png'
import pantimg17 from '../../images/Pants/pantimg17.png'
import pantimg18 from '../../images/Pants/pantimg18.png'
import pantimg19 from '../../images/Pants/pantimg19.png'
import pantimg20 from '../../images/Pants/pantimg20.png'

import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Pants_mobileview from './Pants_mobileview';

import axios from 'axios';

function Pants() {

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
      pantimg: pantimg1,
      pant_name: "AVANOVA",
      pant_desc: "The Pant Project Luxury PV Lycra Stretchable Formal Pants for Men | Stylish Slim Fit Men's Wear Trousers for Office or Party | Mens Fashion Dress Trouser Pant",
      precision_rating: 3,
      price: 1975
    },
    {
      pantimg: pantimg2,
      pant_name: "Amazon Brand",
      pant_desc: "Amazon Brand - Symbol Men's Stretchable Formal Pants | Trousers (Slim Fit)",
      precision_rating: 4,
      price: 2975
    },
    {
      pantimg: pantimg3,
      pant_name: "Lymio",
      pant_desc: "Lymio Track Pant for Men || Track Pants || Plain Track Pant (Track-06-08)",
      precision_rating: 1,
      price: 975
    },
    {
      pantimg: pantimg4,
      pant_name: "Lymio",
      pant_desc: "Men Regular Fit Pants",
      precision_rating: 2,
      price: 1975
    },
    {
      pantimg: pantimg5,
      pant_name: "Lymio",
      pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-38-41)",
      precision_rating: 2,
      price: 575
    },
    {
      pantimg: pantimg6,
      pant_name: "AVANOVA",
      pant_desc: "Men's Trouser II Men's Regular Casual Pants II Men's Regular Fit Casual Trouser (Trousers-121)",
      precision_rating: 4,
      price: 1375
    },
    {
      pantimg: pantimg7,
      pant_name: "Lymio",
      pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)",
      precision_rating: 4,
      price: 5000
    },
    {
      pantimg: pantimg8,
      pant_name: "TOPLOT",
      pant_desc: "TOPLOT Men's Regular Fit Causal Trouser",
      precision_rating: 3,
      price: 3405
    },
    {
      pantimg: pantimg9,
      pant_name: "JVX",
      pant_desc: "JVX Men Trouser || Men Trouser Pants || Men Trouser Pants Cotton || Trouser for Men(Trouser)",
      precision_rating: 3,
      price: 2500
    },
    {
      pantimg: pantimg10,
      pant_name: "Lymio",
      pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cago-22-25)",
      precision_rating: 2,
      price: 2600
    },
    {
      pantimg: pantimg11,
      pant_name: "Lymio",
      pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-13-16)",
      precision_rating: 4,
      price: 3520
    },
    {
      pantimg: pantimg12,
      pant_name: "AVANOVA",
      pant_desc: "Men's Trouser II Men's Regular Casual Pants II Men's Regular Fit Casual Trouser (Trousers-120)",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg13,
      pant_name: "Amazon Brand",
      pant_desc: "Men Casual Cotton Pants | Chinos | Trousers (Regular Fit)",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg14,
      pant_name: "JVX",
      pant_desc: "JVX Men Trouser || Men Trouser Pants || Men Trouser Pants Cotton || Trouser for Men(Trouser)",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg15,
      pant_name: "Leriya Fashion",
      pant_desc: "Baggy Cargo Pant trouser for Men",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg16,
      pant_name: "Lymio",
      pant_desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Army)",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg17,
      pant_name: "Lymio",
      pant_desc: "Lymio Men Jeans || Men Jeans Pants || Denim Jeans || Baggy Jeans for Men (Jeans-06-07-08)",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg18,
      pant_name: "TOPLOT",
      pant_desc: "Men's Regular Casual Pants",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg19,
      pant_name: "POSHAX",
      pant_desc: "Men Trouser || Men's Regular Trouser || Men's Regular Fit Casual Trouser (Trouser-09-11)",
      precision_rating: 4,
      price: 1975
    },
    {
      pantimg: pantimg20,
      pant_name: "Peter England",
      pant_desc: "Men's Solid Super Slim Fit Front Knit Trouser",
      precision_rating: 4,
      price: 1975
    }
  ]
  return (
    <>
      <Container fluid className='mt-5 pt-5 d-none d-md-block'>
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
      <Pants_mobileview/>
      
      

    </>
  )
}

export default Pants







