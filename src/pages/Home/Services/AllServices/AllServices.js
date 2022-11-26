import React, { useEffect, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useTitle('Services')
    useEffect(() => {
        fetch('http://localhost:1000/servicesall')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
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