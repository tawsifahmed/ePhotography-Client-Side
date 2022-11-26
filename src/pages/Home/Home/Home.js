import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Home2 from '../Home2/Home2';
import Home3 from '../Home3/Home3';
import Services from '../Services/Services/Services';
import './Home.css'

const Home = () => {
    useTitle('Home')
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
            <Home2></Home2>
            <Home3></Home3>
        </div>
    );
};

export default Home;