import React, { useEffect, useState } from 'react';
import ActualState from '../components/ActualState';

import { fetchClimate } from '../api/apiClimateService';

const HomePage = () => {
  const [climate, setClimate] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const climate = await fetchClimate();
      setClimate(climate);
    };

    fetchData();
  }, []);

  return (
    <>
      <ActualState
        temperature={climate.temperature}
        humidity={climate.humidity}
        pressure={climate.pressure}
        feelsLike={climate.feelsLike}
        comfortStatus={climate.comfortStatus}
      />
    </>
  );
};

export default HomePage;
