const axios = require('axios');

exports.getAddressCoordinate = async (address) => {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API; // Ensure you have your API key in environment variables
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: apiKey
      }
    });

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng
      };
    } else {
      throw new Error('Unable to fetch coordinates');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};