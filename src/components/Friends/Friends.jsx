import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
  const data = useLoaderData();
  return (
    <div>
      <h3 className='text-3xl font-semibold py-8'>There are my friends: {data.length}</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        data.map(user=><Friend key={user.id} user={user}></Friend>)
      }
      </div>
      
    </div>
  );
};

export default Friends;