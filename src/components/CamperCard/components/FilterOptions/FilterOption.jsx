import style from './filterOption.module.css';
import Icon from '../../../Icon/Icon.jsx';

function FilterOption({ option }) {
  return (
    <div className={style.option}>
      <Icon className={style.icon} iconId={`icon-${option}`} />
      <p>{option}</p>
    </div>
  );
}

export default FilterOption;
