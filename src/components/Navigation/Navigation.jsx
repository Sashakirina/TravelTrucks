import { NavLink } from 'react-router-dom';
import style from './navigation.module.css';

function Navigation() {
  return (
    <nav className={style.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : style.link
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : style.link
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
    </nav>
  );
}

export default Navigation;
