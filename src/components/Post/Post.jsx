import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  // console.log(post);
  const {id, title, body} = post;
  return (
    <div className='p-6 bg-slate-400 rounded-md'>
      <h3 className='text-xl font-semibold pb-4'>{title}</h3>
      <p>{body.slice(0, 100)}...</p>
      <p className='my-4'><Link to={`/post/${id}`} className='py-2 px-4 bg-green-700 rounded-md hover:bg-green-600'>See details</Link></p>
    </div>
  );
};

export default Post;