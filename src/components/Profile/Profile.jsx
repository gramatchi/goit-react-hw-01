import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src={image} alt="User avatar" className={s.icon} />
        <p className={(s.info, s.name)}>{name}</p>
        <p className={s.info}>@{tag}</p>
        <p className={s.info}>{location}</p>
      </div>

      <ul className={s.list}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={s.item} key={key}>
            <span>
              {key
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
            <span className={s.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
