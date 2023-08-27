"use client"

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { fetchUsers } from '../../redux/features/usersSlice';
import styles from './login.module.css';

const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
  
    if (foundUser) {
      router.push('/');
    } else {
      setErrorMessage('Invalid email or password');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000); // Hide the error message after 3 seconds
    }
  };
  

  return (
<div className={styles.container}>
      <h1 className="text-4xl font-bold tracking-widest mt-18">
        LOGIN PAGE
      </h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <input
          type="email"
          className={styles.input} // Added missing className attribute
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.input} // Added missing className attribute
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
        <button type="submit" className={styles.button}>Login</button> 
      </form>
    </div>
  );
};

export default LoginPage;
