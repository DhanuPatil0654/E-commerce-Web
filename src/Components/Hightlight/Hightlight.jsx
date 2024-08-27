import React, { useState } from 'react'
import '../../CSS/Hightlight com/hightlight.css'

import Slider from "react-slick";
import banner1 from '../../images/Team banner/banner1.png'
import banner2 from '../../images/Team banner/banner2.png'
import banner3 from '../../images/Team banner/banner3.png'
import banner4 from '../../images/Team banner/banner4.png'
import banner5 from '../../images/Team banner/banner5.png'
import banner6 from '../../images/Team banner/banner6.png'

import Button from '@mui/material/Button';

import { Card, Container } from 'react-bootstrap';



import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { LiaSellsy } from "react-icons/lia";
import { PiGlobeStandBold } from "react-icons/pi";
import { IoTodaySharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaShirt } from "react-icons/fa6";
import { MdOutlineNewReleases } from "react-icons/md";
import { FaIdCardClip } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";

import Sell from '../../Components/Sell/Sell';
import Bestsell from '../../Components/Best Sell/Bestsell';
import Todaysdeals from '../../Components/Todays Deals/Todaysdeals';
import Mobiles from '../../Components/Mobiles/Mobiles';
import Newreleases from '../../Components/New Releases/Newreleases';
import Fastion from '../../Components/Fastion/Fastion';
import Customercare from '../../Components/Customer care/Customercare';

import sellimg from '../../images/Sell img/sell mobile img.png'
import bestseller from '../../images/Sell img/bestsellerimg.png'
import todaysdeal from '../../images/Sell img/todays best deals.png'
import mobileimg from '../../images/Sell img/mobileimg.png'
import newrelese from '../../images/Sell img/new releace.png'
import fastionimg from '../../images/Sell img/fastionimg.png'
import customerserice from '../../images/Sell img/customerservice.png'
import addtocard from '../../images/Sell img/customerservice.png'
import History from '../History/History';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const sliderteam = [
    {
        image: banner1,
        title: 'Sell On Mobile',
    },
    {
        image: banner2,
        title: 'Extrim Sells',
    },
    {
        image: banner3,
        title: 'Best Seller of Month',
    },
    {
        image: banner4,
        title: 'Sells on Shop',
    },
    {
        image: banner5,
        title: 'Grocerys',
    },
    {
        image: banner6,
        title: 'New Releaces Sell',
    },
]

function Hightlight() {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024, // for tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // for mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Box width={'100%'} style={{ backgroundColor: 'white' }} className="mt-5 pt-2 d-none d-md-block">
                <Box>
                    <Container className='mr-5'>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            variant="scrollable"
                            className="tabs-container"
                        >
                            <Tab icon={<LiaSellsy />} label="Sell" {...a11yProps(0)} />
                            <Tab icon={<PiGlobeStandBold />} label="Best Sellers" {...a11yProps(1)} />
                            <Tab icon={<IoTodaySharp />} label="Today's Deals" {...a11yProps(2)} />
                            <Tab icon={<FaMobileAlt />} label="Mobile" {...a11yProps(3)} />
                            <Tab icon={<MdOutlineNewReleases />} label="New Releases" {...a11yProps(4)} />
                            <Tab icon={<FaShirt />} label="Fashion" {...a11yProps(5)} />
                            <Tab icon={<FaIdCardClip />} label="Add To Card" {...a11yProps(6)} />
                            <Tab icon={<FaHistory />} label="History" {...a11yProps(7)} />
                            <Tab icon={<RiCustomerService2Fill />} label="Customer Services" {...a11yProps(8)} />
                        </Tabs>
                    </Container>
                </Box>
            </Box>

            <Box width={'100%'} style={{ backgroundColor: 'white'   }} className="pt-3 mt-5 d-block d-md-none">
                <Box>
                    <Container className='mr-5'>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            variant="scrollable"
                            className="tabs-container"
                        >
                            <Tab icon={<img src={sellimg} alt="Sell" height={'80px'}/>} label="Sell" {...a11yProps(0)} />
                            <Tab icon={<img src={bestseller} alt="Sell" height={'80px'}/>} label="Best Sellers" {...a11yProps(1)} />
                            <Tab icon={<img src={todaysdeal} alt="Sell" height={'80px'}/>} label="Today's Deals" {...a11yProps(2)} />
                            <Tab icon={<img src={mobileimg} alt="Sell" height={'80px'}/>} label="Mobile" {...a11yProps(3)} />
                            <Tab icon={<img src={newrelese} alt="Sell" height={'80px'}/>} label="New Releases" {...a11yProps(4)} />
                            <Tab icon={<img src={fastionimg} alt="Sell" height={'80px'}/>} label="Fashion" {...a11yProps(5)} />
                            <Tab icon={<img src={fastionimg} alt="Sell" height={'80px'}/>} label="Add To Card" {...a11yProps(6)} />
                            <Tab icon={<img src={addtocard} alt="Sell" height={'80px'}/>} label="History" {...a11yProps(7)} />
                            <Tab icon={<img src={customerserice} alt="Sell" height={'80px'}/>} label="Customer Services" {...a11yProps(8)} />
                        </Tabs>
                    </Container>
                </Box>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Sell />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Bestsell />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Todaysdeals />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Mobiles />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Newreleases />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <Fastion />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
               View Details
            </CustomTabPanel>
            <CustomTabPanel value={value} index={7}>
                <History/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={8}>
                <Customercare />
            </CustomTabPanel>

            <h3 className='text-center fs-2' style={{ letterSpacing: '20px' }}>HIGHLIGHT</h3>
            <Container >
                <Slider {...settings} >
                    {
                        sliderteam.map((a, index) => {
                            return (
                                <div key={index}>
                                    <Card className='ml-3 carddteams'>
                                        <Card.Img variant="top" src={a.image} width={'100%'} height={'160px'} />
                                        <Card.Body>
                                            <Button >Get Offers</Button><b className='ml-1 pill-title'>50% Off</b>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </Slider>
            </Container>
        </>
    )
}

export default Hightlight
