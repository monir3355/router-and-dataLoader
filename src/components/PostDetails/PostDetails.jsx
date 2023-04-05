import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  // console.log(post);
  const {id, title, body} = post;
  return (
    <div>
      <h2 className="text-3xl font-semibold py-8">Here is all Post Details</h2>
      <p>id: {id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;