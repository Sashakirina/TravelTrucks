import { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchLocation } from '../../../../utils/fetchLokations.js';

function LocationSearch({ setFieldValue }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocations = async () => {
      try {
        const locations = await fetchLocation();
        setLocations(locations);
      } catch (error) {
        console.log('Faild  to load locations', error);
      }
    };
    getLocations();
  }, []);

  return (
    <div>
      {' '}
      <label htmlFor="location">Location</label>
      <Select
        id="location"
        options={locations.map(loc => ({
          value: loc,
          label: loc.split(',').reverse().join(', '),
        }))}
        placeholder="City"
        isClearable
        isSearchable
        onChange={option =>
          setFieldValue('location', option ? option.value : '')
        }
      ></Select>
    </div>
  );
}

export default LocationSearch;
