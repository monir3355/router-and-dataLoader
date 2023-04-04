import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const userDetails = useLoaderData();
  // console.log(userDetails);
  const { id, name, phone, email } = userDetails;
  return (
    <div>
      <h3 className="text-3xl font-semibold py-8">
        There are my friend all information
      </h3>
      <div>
        <h3>Id: {id}</h3>
        <h3>Name: {name}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default FriendDetails;
