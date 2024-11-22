import { useDispatch, useSelector } from 'react-redux';
import {
  selectCampers,
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/campers/selectors.js';
import CamperCard from '../CamperCard/CamperCard.jsx';
import style from './campersList.module.css';
import { setPage } from '../../redux/campers/slice.js';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';

function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  console.log(campers);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchCampers({ page: 1, limit: 4 }));
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    if (currentPage < totalPages) {
      dispatch(setPage(nextPage));
      dispatch(fetchCampers({ page: nextPage, limit: 4 }));
    }
    console.log(nextPage);
  };

  return (
    <div>
      <ul className={style.list}>
        {campers.map(({ id, ...camper }) => (
          <li key={id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {currentPage < totalPages && (
        <button className={style.btnLoad} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
}

export default CampersList;
