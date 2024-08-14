import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Form, InputGroup } from 'react-bootstrap'; // Import from 'react-bootstrap'

import ManageSearchIcon from '@mui/icons-material/ManageSearch';

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

function Demo() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showNoResults, setShowNoResults] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setFilterData(data);
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
        setSearchValue(name);
        setData([]);
        setShowNoResults(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2" className='text-center'>
                        Search Product<p className='font-weight-light'>Enter product names</p>
                    </Typography>
                    <Typography id="keep-mounted-modal-description">
                        <InputGroup className='mt-2'>
                            <InputGroup.Text id="inputGroupPrepend"><ManageSearchIcon/></InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="search product"
                                aria-describedby="inputGroupPrepend"
                                value={searchValue}
                                onChange={e => handleFilter(e.target.value)}
                            />
                        </InputGroup>
                        <div className='search-result'>
                            {searchValue && showNoResults ? (
                                <div>No data found</div>
                            ) : (
                                data.map((a, i) => (
                                    <div key={i} onClick={() => handleSelect(a.name)}>
                                        {a.name}
                                    </div>
                                ))
                            )}
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default Demo;
