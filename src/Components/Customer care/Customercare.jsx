import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
function Customercare() {
    const [fname , setfname] = useState("");
    const [lname , setlname] = useState("");
    const [phonenumber , setnumber] = useState("");
    const [email , setemail] =  useState("")
    const [address , setaddress] =  useState("")
    const [city , setcity] = useState("")
    const [postalcode , setpostalcode] = useState("")
    const [dist , setdist] =  useState("")
    const [region , setregion] = useState("")
    const [errors, setErrors] = useState({})


    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!fname.trim()) {
            errors.fname = 'first name is required';
            isValid = false;
        }
        if (!lname.trim()) {
            errors.lname = 'last name is required';
            isValid = false;
        }
        if (!phonenumber) {
            errors.phonenumber = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(phonenumber)) {
            errors.phonenumber = 'Mobile number must be exactly 10 digits';
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = 'email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'invalid email address';
            isValid = false;
        }
        if (!address.trim()) {
            errors.address = 'address is required';
            isValid = false;
        }
        if (!city.trim()) {
            errors.city = 'city is required';
            isValid = false;
        }
        if (!postalcode.trim()) {
            errors.postalcode = 'postalcode is required';
            isValid = false;
        }
        if (!dist.trim()) {
            errors.dist = 'dist is required';
            isValid = false;
        }
        if (!region.trim()) {
            errors.region = 'region is required';
            isValid = false;
        }
        setErrors(errors);
        return isValid;
    }



    const customerformsubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            let newData = {
                fname, lname, phonenumber, email, address, city, postalcode, dist, region
            }
            console.log("newData", newData);
            alert("Data Is Submitted");
        };
    }


    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Form onSubmit={customerformsubmit}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Label>First Name : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Fisrt" value={fname} onChange={(e)=> setfname(e.target.value)}/>
                                    {errors.fname && <span className="error text-danger">{errors.fname}</span>}
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Label>Last Name : </Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last" value={lname} onChange={(e)=> setlname(e.target.value)}/>
                                    {errors.lname && <span className="error text-danger">{errors.lname}</span>}
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className="mb-2" controlId="formGroupEmail">
                                        <Form.Label>Phone Number : </Form.Label>
                                        <Form.Control type="tel" placeholder="Enter no" value={phonenumber} onChange={(e)=> setnumber(e.target.value)}/>
                                        {errors.phonenumber && <span className="error text-danger">{errors.phonenumber}</span>}
                                    </Form.Group>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                                    <Form.Group className="mb-2" controlId="formGroupPassword">
                                        <Form.Label>Email : </Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email" value={email} onChange={(e)=> setemail(e.target.value)}/>
                                        {errors.email && <span className="error text-danger">{errors.email}</span>}
                                    </Form.Group>
                                </Col>
                                <br></br>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Address : </Form.Label>
                                <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e)=> setaddress(e.target.value)} />
                                {errors.address && <span className="error text-danger">{errors.address}</span>}
                            </Form.Group>
                            <Row>
                                <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>City : </Form.Label>
                                        <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e)=> setcity(e.target.value)}/>
                                        {errors.city && <span className="error text-danger">{errors.city}</span>}
                                    </Form.Group>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label>Postal Code : </Form.Label>
                                        <Form.Control type="number" placeholder="Enter code" value={postalcode} onChange={(e)=> setpostalcode(e.target.value)} />
                                        {errors.postalcode && <span className="error text-danger">{errors.postalcode}</span>}
                                    </Form.Group>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={12} xm={12}>
                                    <Form.Label>Select District : </Form.Label>
                                    <Form.Select aria-label="Default select example" value={dist} onChange={(e)=> setdist(e.target.value)}>
                                        <option value="1">Dhule</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    {errors.dist && <span className="error text-danger">{errors.dist}</span>}
                                </Col>
                            </Row>
                            <Form.Label>Select Region : </Form.Label>
                            <Form.Select aria-label="Default select example" value={region} onChange={(e)=> setregion(e.target.value)}>
                                <option value="1">India</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            {errors.region && <span className="error text-danger">{errors.region}</span>}
                            <br></br>
                            <Button variant="outline-success" className='mt-3' type='submit'>Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
export default Customercare
