import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useTitle('Services');

    useEffect(() => {
        fetch('https://a11-server-side.vercel.app/servicesall')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center mt-5 pt-5'><Spinner className='mt-5' animation="border" variant="primary" /></div>
    }

    return (
        <div className='mt-3 container mb-5'>
            <div>
                <h2 className='text-decoration-underline mb-4 text-center'>My Services</h2>
            </div>
            <div className='row row-cols-xl-4 row-cols-md-3 row-cols-1 gap-3 d-flex justify-content-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}>

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;