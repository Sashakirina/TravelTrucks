import sprite from './sprite.svg';

function Icon({ styles, className, width, height, iconId, onClick }) {
  return (
    <svg
      style={styles}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
    >
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
}

export default Icon;
