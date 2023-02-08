import React from 'react';

import 'react-toastify/dist/ReactToastify.css';

const ReviewersRow = ({ review, handleDelete }) => {
    const { _id, serviceName, email, message } = review;

    return (

        <tr className=''>
            <td>
                <button onClick={() => handleDelete(_id)}>DLT</button>
            </td>
            <td className='ps-5'>{serviceName}</td>
            <td className='pe-5'>{email}</td>
            <td className='ps-5'>{message}</td>
        </tr>

    );
};

export default ReviewersRow;