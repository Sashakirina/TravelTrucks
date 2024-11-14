import style from './filterOption.module.css';
import Icon from '../../../Icon/Icon.jsx';

function FilterOption({ option }) {
  const optionName = option[0].toUpperCase() + option.slice(1);
  return (
    <div className={style.option}>
      <Icon className={style.icon} iconId={`icon-${option}`} />
      <p>{optionName}</p>
    </div>
  );
}

export default FilterOption;
