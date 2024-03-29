import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Table from 'react-bootstrap/Table';
import ReviewersRow from './ReviewersRow';
import useTitle from '../../hooks/useTitle';




const Reviewers = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviewers, setReviewers] = useState([])
    useTitle('My Reviews')

    // reviews data load based on users
    useEffect(() => {
        fetch(`https://a11-server-side.vercel.app/reviewers?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json();
            })
            .then(data => {
                setReviewers(data)
            })
    }, [user?.email, logOut])


    // review data delete method
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://a11-server-side.vercel.app/reviewers/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviewers.filter(rvw => rvw._id !== id)
                        setReviewers(remaining)

                    }
                })
        }

    }

    return (
        <div className='container mx-auto'>

            {/* review table */}
            <Table striped>
                <thead>

                    <tr className=''>
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
                            handleDelete={handleDelete}
                        ></ReviewersRow>)
                    }

                </tbody>
            </Table>
            <div className='d-flex align-items-center justify-content-center pt-5'>

                <h2 className='text-center pt-5'>you have {reviewers.length} reviews</h2>
            </div>
        </div >
    );
};

export default Reviewers;