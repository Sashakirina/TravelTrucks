import { NavLink } from 'react-router-dom';
import style from './home.module.css';

function Home() {
  return (
    <div className={style.container}>
      <div className={style.texrWrapper}>
        <h1 className={style.title}>Campers of your dreams</h1>
        <h2 className={style.text}>
          You can find everything you want in our catalog
        </h2>
      </div>
      <NavLink className={style.link} to="/catalog">
        View Now
      </NavLink>
    </div>
  );
}

export default Home;
