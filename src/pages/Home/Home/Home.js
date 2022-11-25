import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Services from '../Services/Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center'>

                <Link to='/services'>
                    <Button className='viewAll' variant='danger'>
                        <h5 className='text-center text-white pt-2'>View More</h5>
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;