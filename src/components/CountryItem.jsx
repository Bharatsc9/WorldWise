import styles from "./CountryItem.module.css";
import * as Flags from "country-flag-icons/react/3x2";

function CountryItem({ country }) {
  const Flag = Flags[country.emoji];

  return (
    <li className={styles.countryItem}>
      <span>{Flag && <Flag width={28} />}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
