import FilterOption from '../FilterOptions/FilterOption.jsx';

function FilterOptionsList({ data }) {
  const booleanOptions = Object.entries(data)
    .filter(([key, value]) => typeof value === 'boolean' && value)
    .map(([key, value]) => key);

  return (
    <ul>
      {' '}
      {booleanOptions.map(option => (
        <li key={option}>
          {' '}
          <FilterOption option={option} />{' '}
        </li>
      ))}{' '}
    </ul>
  );
}

export default FilterOptionsList;

// "AC": true,
// "bathroom": true,
// "kitchen": false,
// "TV": true,
// "radio": true,
// "refrigerator": false,
// "microwave": true,
// "gas": false,
// "water": true,
