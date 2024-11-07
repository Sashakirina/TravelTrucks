import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink className={style.link} to="/">
        Home
      </NavLink>
      <NavLink className={style.link} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
}

export default Navigation;
