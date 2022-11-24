import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ServiceDetailCardReviewRows from '../ServiceDetailCardReviewRows/ServiceDetailCardReviewRows';

const ServiceDetailCardReviews = ({ _id }) => {

    const [reviewers, setReviewers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:1000/reviewers?service=${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviewers(data)
            })
    }, [])


    return (
        <div className='container mx-auto'>
            <h4 className='text-center text-decoration-underline'>All reviews: Total {reviewers.length} </h4>
            <Table striped>
                <thead className=''>

                    <tr className=''>
                        <th>#</th>
                        <th className=''>Service-Name</th>
                        <th className=''>Name</th>
                        <th className=''>Email</th>
                        <th className=''>Message</th>
                    </tr>

                </thead>
                <tbody>

                    {
                        reviewers.map(review => <ServiceDetailCardReviewRows
                            key={review._id}
                            review={review}

                        ></ServiceDetailCardReviewRows>)
                    }

                </tbody>
            </Table>
        </div >
    );
};

export default ServiceDetailCardReviews;