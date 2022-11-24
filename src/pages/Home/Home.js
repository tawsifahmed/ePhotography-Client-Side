import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div className='text-center'>

                <Button>

                    <Link to='/services'><h5 className='text-center text-white'>View More</h5></Link>
                </Button>
            </div>
        </div>
    );
};

export default Home;