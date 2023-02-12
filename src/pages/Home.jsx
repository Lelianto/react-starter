import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserByUid } from 'src/hooks/firebase-config';

const Home = () => {
  const { id } = useParams();
  const [onlineUser, setOnlineUser] = useState(null);
  const getUserBuId = useCallback(async () => {
    if (id) {
      const userData = await getUserByUid(id);
      setOnlineUser(userData);
    }
  }, [id]);
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate('/about');
  };

  const goToRegister = () => {
    navigate('/');
  };

  useEffect(() => {
    getUserBuId();
  }, [id]);
  return (
    <div className="flex items-center p-10">
      {onlineUser?.fullName && (
        <>
          <h1 className="text-2xl">{onlineUser?.fullName ?? 'none'} is online</h1>
          <button
            type="button"
            onClick={goToAbout}
            className="bg-blue-500 px-4 text-white ml-4 rounded-full">
            About
          </button>
        </>
      )}
      {
        !onlineUser?.fullName(
          <button
            type="button"
            onClick={goToRegister}
            className="bg-blue-500 px-4 text-white ml-4 rounded-full">
            Register
          </button>,
        )
      }
    </div>
  );
};
export default Home;
