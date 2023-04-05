import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);
  return (
    <div>
      <h2 className="text-3xl font-semibold py-8">Here is all Posts: {posts.length}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          posts.slice(0, 12).map(post=><Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  );
};

export default Posts;
