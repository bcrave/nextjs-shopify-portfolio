import { icon } from "@fortawesome/fontawesome-svg-core";
import styles from "../styles/ServiceGridItem.module.css";

const ServiceGridItem = ({
  itemNumber,
  faIcon,
  serviceTitle,
  serviceDescription,
}) => {
  return (
    <div className={styles.gridItem}>
      <div class={`grid-item grid-item-${itemNumber}`}>
        <span className={styles.iconSpan}>{faIcon}</span>
        <div class="service-text">
          <h3 class="service-title">{serviceTitle}</h3>
          <p class="service-description">{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceGridItem;
