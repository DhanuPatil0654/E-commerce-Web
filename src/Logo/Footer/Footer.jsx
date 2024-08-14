import React from 'react'
import '../../CSS/Footer/footer.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../../Logo/logo.png'
function Footer() {
  return (
    <>
      <div className='contactus  mt-5 '>CONTACT US</div>
      <div className='footer_content '>
        <Container>
          <Row className='pt-5 pb-5'>
            <Col xl={3} lg={3} md={6} sm={12} xm={12} >
              <ul className='pt-1'>
                <li className='fs-5'><b>Get to Know Us</b></li>
                <li className='mt-3'>About us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Amazon Science</li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xm={12}>
              <ul className='pt-1'>
                <li className='fs-5'><b>Connect with Us</b></li>
                <li className='mt-3'>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xm={12}>
              <ul className='pt-1 '>
                <li className='fs-5'><b>Make Money with Us</b></li>
                <li className='mt-3'>Sell on Amazon</li>
                <li>Sell under Amazon Accelerator</li>
                <li>Protect and Build Your Brand</li>
                <li>Global Selling</li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xm={12}>
              <ul className='pt-1'>
                <li className='fs-5'><b>Let Us Help You</b></li>
                <li className='mt-3'>Your Account</li>
                <li>Returns Centre</li>
                <li>Recalls and Product Safety Alerts</li>
                <li>100% Purchase Protection</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      {/* mobile view */}
      {/* <div className='footer_content_mobile d-block d-md-none '>
        <Container>
          <Row className='pt-5 '>
            <Col xl={3} lg={3} md={6} sm={12} xm={12} >
              <ul className='pt-1'>
                <li className='fs-5'><b>Get to Know Us</b></li>
                <li className='mt-3'>About us</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Amazon Science</li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xm={12}>
              <ul className='pt-1'>
                <li className='fs-5'><b>Connect with Us</b></li>
                <li className='mt-3'>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xm={12}>
              <ul className='pt-1'>
                <li className='fs-5'><b>Make Money with Us</b></li>
                <li className='mt-3'>Sell on Amazon</li>
                <li>Sell under Amazon Accelerator</li>
                <li>Protect and Build Your Brand</li>
                <li>Global Selling</li>
              </ul>
            </Col>
            <Col xl={3} lg={3} md={6} sm={12} xm={12}>
              <ul className='pt-1'>
                <li className='fs-5'><b>Let Us Help You</b></li>
                <li className='mt-3'>Your Account</li>
                <li>Returns Centre</li>
                <li>Recalls and Product Safety Alerts</li>
                <li>100% Purchase Protection</li>
              </ul>
            </Col>
          </Row>
        </Container>

      </div> */}
      <div className='contactus_name'>
      <Image src={logo} roundedCircle width={'30px'} height={'30px'} className='me-2'/>Copyright _Dhananjay_Patil  +91 9579581490 
         {/* copyright _Dhananjay Patil &copy; <a href="mailto:example@example.com" className='footer-link'><Image src={logo} roundedCircle width={'30px'} height={'30px'} className='me-2'/></a> */}
      </div>

    </>
  )
}

export default Footer
