"use client"

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/features/usersSlice';

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await dispatch(fetchUsers()).unwrap();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Login</h1>
      {users.map((user, index) => (
        <p key={index}>
          {user.email} = {user.password}
        </p>
      ))}
    </div>
  );
};

export default LoginPage;
