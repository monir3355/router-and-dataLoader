import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({user}) => {
  // console.log(data);
  const {id, name, phone, email} = user;
  return (
    <div className='p-6 bg-slate-400 rounded-md'>
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p className='my-4'><Link to={`/friend/${id}`} className='py-2 px-4 bg-green-700 rounded-md hover:bg-green-600'>See details</Link></p>
    </div>
  );
};

export default Friend;