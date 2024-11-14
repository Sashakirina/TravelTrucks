import { useSelector } from 'react-redux';
import { selectAllCampers } from '../../redux/campers/selectors.js';
import CamperCard from '../CamperCard/CamperCard.jsx';
import style from './campersList.module.css';

function CampersList() {
  const campers = useSelector(selectAllCampers);
  console.log(campers);

  return (
    <ul className={style.list}>
      {campers.map(({ id, ...camper }) => (
        <li key={id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}

export default CampersList;
