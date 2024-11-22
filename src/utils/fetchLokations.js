import axios from 'axios';

export const fetchLocation = async () => {
  try {
    const response = await axios.get('/campers');
    const uniqLocation = [
      ...new Set(response.data.items.map(item => item.location)),
    ];
    return uniqLocation;
  } catch (error) {
    console.log('Error fetching lcation');
    throw error;
  }
};
