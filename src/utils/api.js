import { API_END_POINT } from './constants';

async function apiData(endPoint, requestType, data) {
  const response = await fetch(`${API_END_POINT}${endPoint}`, {
    method: requestType,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

export default apiData;
