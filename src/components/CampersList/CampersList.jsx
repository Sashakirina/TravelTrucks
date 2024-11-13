import { useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/selectors.js';
import CamperCard from '../CamperCard/CamperCard.jsx';

function CampersList() {
  const campers = useSelector(selectAllCampers);
  console.log(campers);

  return (
    <ul>
      {campers.map(({ id, ...camper }) => (
        <li key={id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}

export default CampersList;
