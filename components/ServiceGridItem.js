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
      <div className={`grid-item grid-item-${itemNumber}`}>
        <span className={styles.iconSpan}>{faIcon}</span>
        <div className="service-text">
          <h3 className="service-title">{serviceTitle}</h3>
          <p className="service-description">{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceGridItem;
