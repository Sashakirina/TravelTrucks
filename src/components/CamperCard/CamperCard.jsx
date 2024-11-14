import Icon from '../Icon/Icon.jsx';
import style from './camperCard.module.css';
import FilterOptionsList from './components/FilterOptionsList/FilterOptionsList.jsx';

function CamperCard({ camper }) {
  const {
    name,
    price,
    rating,
    location,
    description,
    reviews,
    gallery,
    ...data
  } = camper;

  const rewievsCount = reviews.length;
  const locationReverse = location.split(',').reverse().join(', ');
  const formattedPrice = price.toFixed(2);
  const imgUrl = gallery[0].thumb;
  const shortName = name.slice(0, 30);

  return (
    <div className={style.card}>
      <img src={imgUrl} alt="camper" className={style.picture} />
      <div className={style.camperInfo}>
        <div>
          <div className={style.titleWrapper}>
            <h2 className={style.title}>{shortName}</h2>
            <div className={style.priceWrapper}>
              <p className={style.price}> € {formattedPrice}</p>
              <Icon className={style.iconHeart} iconId={'icon-heart'} />
            </div>{' '}
          </div>
          <div className={style.infoContainer}>
            <div className={style.infoWrapper}>
              <Icon className={style.iconStar} iconId={'icon-star'} />
              <p
                className={style.info}
              >{`${rating} (${rewievsCount} Rewievs)`}</p>
            </div>
            <div className={style.infoWrapper}>
              <Icon className={style.iconMap} iconId={'icon-map'} />
              <p className={style.info}> {locationReverse}</p>
            </div>
          </div>
        </div>

        <p className={style.description}>{description}</p>

        <FilterOptionsList data={data} />
        <button className={style.btnShow}>Show more</button>
      </div>
    </div>
  );
}

export default CamperCard;

//  "name": "Road Bear C 23-25",
// "price": 10000,
// "rating": 4.5,
// "location": "Ukraine, Kyiv",
// "description": "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
// "form": "alcove",
// "length": "7.3m",
// "width": "2.65m",
// "height": "3.65m",
// "tank": "208l",
// "consumption": "30l/100km",
// "transmission": "automatic",
// "engine": "diesel",

// "gallery": [
// {
// "thumb": "https://ftp.goit.study/img/campers-test-task/1-1.webp",
// "original": "https://ftp.goit.study/img/campers-test-task/1-1.webp"
// },
// {
// "thumb": "https://ftp.goit.study/img/campers-test-task/1-2.webp",
// "original": "https://ftp.goit.study/img/campers-test-task/1-2.webp"
// },
// {
// "thumb": "https://ftp.goit.study/img/campers-test-task/1-3.webp",
// "original": "https://ftp.goit.study/img/campers-test-task/1-3.webp"
// }
// ],
// "reviews": [
// {
// "reviewer_name": "Alice",
// "reviewer_rating": 5,
// "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
// },
// {
// "reviewer_name": "Bob",
// "reviewer_rating": 4,
// "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
// }
// ]}
