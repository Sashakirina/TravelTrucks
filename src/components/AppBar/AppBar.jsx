import Icon from '../Icon/Icon.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import style from './appBar.module.css';

function AppBar() {
  return (
    <div className={style.appBar}>
      <Icon className={style.iconLogo} iconId={'icon-logo'} />
      <Navigation />
    </div>
  );
}

export default AppBar;
