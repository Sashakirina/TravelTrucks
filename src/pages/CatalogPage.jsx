import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampers } from '../redux/campers/operations.js';
import Catalog from '../components/Catalog/Catalog.jsx';

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return <Catalog />;
}

export default CatalogPage;
