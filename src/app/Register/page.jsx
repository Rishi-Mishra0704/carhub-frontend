"use client"

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/features/usersSlice';
import { fetchCities } from '../../redux/features/citiesSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Register = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchCities());
    if(user){
      router.push('/')
    }
  }, [dispatch, user]);

  const handleRegister = async () => {
    if (name && address && email && password && selectedCity) {
      try {
        const userData = {
          name,
          address,
          email,
          password,
          city_id: selectedCity,
        };
        
        dispatch(createUser(userData));
        
        localStorage.setItem('user', JSON.stringify(userData));
        
        console.log('User registered successfully');
      } catch (error) {
        console.error('Error registering user:', error);
      }
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };  

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <h1 className="text-4xl font-bold tracking-widest mt-18">
        JOIN OUR PLATFORM
      </h1>
      <form className="flex flex-col gap-6 items-center justify-center rounded-md p-8 bg-gray-200">
        <input
          type="text"
          label="Name"
          variant="bordered"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          label="Address"
          variant="bordered"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          label="Password"
          variant="bordered"
          placeholder="Create your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <select
          className="border rounded-md p-2 mb-2 w-full"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select a city</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
        {errorMessage && (
          <p className="bg-red-300 rounded-md text-red-800 text-xs md:text-md p-2">
            {errorMessage}
          </p>
        )}
        <Link href="/">
        <button
          type="button"
          onClick={handleRegister}
          className="px-6 py-1 rounded-md bg-green-600 hover:bg-green-900 text-white"
        >
          Register
        </button></Link>
      </form>
    </div>
  );
};

export default Register