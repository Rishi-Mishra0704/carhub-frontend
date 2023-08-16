"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../redux/features/citiesSlice';

const RentCarPage = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const status = useSelector((state) => state.cities.status);
  const error = useSelector((state) => state.cities.error);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Cities List</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RentCarPage
