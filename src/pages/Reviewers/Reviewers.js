import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';
import ReviewersRow from './ReviewersRow';



const Reviewers = () => {
    const { user } = useContext(AuthContext);
    const [reviewers, setReviewers] = useState([])


    useEffect(() => {
        fetch(`http://localhost:1000/reviewers?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviewers(data)
            })
    }, [user?.email])





    return (
        <div className='container'>
            <h2 className='text-center'>you have reviews: {reviewers.length} </h2>
            <Table striped>
                <thead>

                    <tr className='d-flex justify-content-center'>
                        <th>#</th>
                        <th className='ps-5'>Service-Name</th>
                        <th className='pe-5'>Email</th>
                        <th className='ps-5'>Message</th>
                    </tr>

                </thead>
                <tbody>

                    {
                        reviewers.map(review => <ReviewersRow
                            key={review._id}
                            review={review}
                        ></ReviewersRow>)
                    }

                </tbody>
            </Table>
        </div >
    );
};

export default Reviewers;