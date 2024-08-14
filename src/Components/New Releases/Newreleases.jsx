
import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import '../../CSS/newrelases/newreleace.css'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import product1 from '../../images/flip/Frame 1.png'
import product2 from '../../images/flip/Frame 2.png'
import product3 from '../../images/flip/Frame 3.png'

import backproductimg from '../../images/flip/backimg.png'
function Newreleases() {

    const [isFlipped1, setflipped1] = useState(false)
    const [isFlipped2, setflipped2] = useState(false)
    const [isFlipped3, setflipped3] = useState(false)

    function flipcard1() {
        setflipped1(!isFlipped1);

    }
    function flipcard2() {
        setflipped2(!isFlipped2);

    }
    function flipcard3() {
        setflipped3(!isFlipped3);

    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className='mb-3'>
                        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped1}>
                            <div className='card border-0' onClick={flipcard1}>
                                <Image src={product1} rounded width={'100%'} height={'400px'} />
                                <div className='fronttext'>
                                    <h1 className='text-center'>Upcomming Offers</h1>
                                </div>
                                {/* <h1 className='text-center cardtextfront'>Pre Order <br></br> Services</h1> */}
                            </div>
                            <div className='card card-back  border-0' onClick={flipcard1}>
                                <Image src={backproductimg} rounded width={'100%'} height={'400px'}  />
                                <div className='cardtext'>
                                    <h3 className='text-center'>Pre Order <br></br> Services</h3>
                                    <p >Application Engineering is one of our main strengths. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost-effective solution in the right time. We help our customers in structuring.</p>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className='mb-3'>
                        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped2}>
                            <div className='card  border-0' onClick={flipcard2}>
                                <Image src={product2} rounded width={'100%'} height={'400px'}  />
                                <div className='fronttext'>
                                    <h1 className='text-center'>Upcomming Events</h1>
                                </div>
                            </div>
                            <div className='card card-back  border-0' onClick={flipcard2}>
                                <Image src={backproductimg} rounded width={'100%'} height={'400px'}  />
                                <div className='cardtext'>
                                    <h3 className='text-center'>Order Selected</h3>
                                    <p >Application Engineering is one of our main strengths. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs.</p>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12} className='mb-3'>
                        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped3}>
                            <div className='card  border-0' onClick={flipcard3}>
                                <Image src={product3} rounded width={'100%'} height={'400px'} />
                                <div className='fronttext'>
                                    <h1 className='text-center'>Stretching Gifts</h1>
                                </div>
                            </div>
                            <div className='card card-back  border-0' onClick={flipcard3}>
                                <Image src={backproductimg} rounded width={'100%'} height={'400px'}  />
                                <div className='cardtext'>
                                    <h3 className='text-center'>Post Order <br></br> Services</h3>
                                    <p >Application Engineering is one of our main strengths. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost-effective solution in the right time.</p>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                </Row >
            </Container>
        </div >
    )
}

export default Newreleases

