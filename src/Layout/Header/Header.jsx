import React, { useState, useEffect } from 'react';
import { Container, Form, Image, Navbar, InputGroup } from 'react-bootstrap';
import logo from '../../Logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Alert from '@mui/material/Alert';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Header() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showNoResults, setShowNoResults] = useState(false);

    const navigate = useNavigate(); // Initialize the useNavigate hook

    useEffect(() => {
        axios.get("http://localhost:8000/getdata")
            .then((res) => {
                setFilterData(res.data.data);
                setData([]);
            })
            .catch(err => console.log(err));
    }, []);

    const handleFilter = (value) => {
        setSearchValue(value);
        if (value === "") {
            setData([]);
            setShowNoResults(false);
        } else {
            const res = filterData.filter(f => f.name.toLowerCase().includes(value.toLowerCase()));
            setData(res);
            setShowNoResults(res.length === 0);
        }
    };

    const handleSelect = (name) => {
        handleClose();
        navigate(`/${name}`);
    };

    return (
        <>
            <Navbar bg="dark" fixed="top" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand>
                        <Image src={logo} roundedCircle height={'40px'} width={'40px'} className='ml-3' />
                    </Navbar.Brand>
                    <Navbar.Brand className="justify-content-center">
                        <Button onClick={handleOpen} className='text-white'><ManageSearchIcon />Explore Product</Button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2" className='text-center'>
                        <p>Search</p>
                    </Typography>
                    <Typography id="keep-mounted-modal-description">
                        <InputGroup className='mt-2'>
                            <InputGroup.Text id="inputGroupPrepend"><ManageSearchIcon /></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="search product"
                                aria-describedby="inputGroupPrepend"
                                value={searchValue}
                                onChange={e => handleFilter(e.target.value)}
                            />
                        </InputGroup>
                        <div className='mt-3 ml-5 '>
                            {searchValue && showNoResults ? (
                                <div style={{ width: '100%' }}>
                                    <Alert severity="warning">Product Not Found</Alert>
                                </div>
                            ) : (
                                data.map((a, i) => (
                                    <div key={i} onClick={() => handleSelect(a.name)} className='p-2'>
                                        {a.name}
                                    </div>
                                ))
                            )}
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default Header;
