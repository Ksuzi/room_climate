import axios from 'axios';
import { Climate } from '../models/climateModel';

export const fetchClimate = async () => {
  const response = await axios.get('http://roomclimate.local:2390/actual');
  console.log({ response });
  return transformToClimate(response.data)
};

const transformToClimate = (value) => {
  return new Climate({
      temperature: value.temperature,
      humidity: value.humidity,
      pressure: value.pressure,
      feelsLike: value.feelsLike,
      comfortStatus: value.comfortStatus
  });
};
