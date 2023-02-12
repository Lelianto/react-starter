import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  }
  return (
    <div className="flex items-center p-10">
      <h1 className="text-2xl">Take me to About Page</h1>
      <button onClick={goToAbout} className="bg-blue-500 px-4 text-white ml-4 rounded-full">About</button>
    </div>
  );
};
export default Home;
