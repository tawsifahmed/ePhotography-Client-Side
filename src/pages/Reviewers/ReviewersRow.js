import React from 'react';

const ReviewersRow = ({ review }) => {
    const { _id, serviceName, reviewer, price, email, phone, message } = review;


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`http://localhost:1000/reviewers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }

    return (
        <div className='container'>
            <tr className='d-flex justify-content-center'>
                <td>
                    <button onClick={() => handleDelete(_id)}>DLT</button>
                </td>
                <td className='ps-5'>{serviceName}</td>
                <td className='pe-5'>{email}</td>
                <td className='ps-5'>{message}</td>
            </tr>
        </div>
    );
};

export default ReviewersRow;