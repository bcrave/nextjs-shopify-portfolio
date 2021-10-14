import styles from "../styles/ServiceGrid.module.css";

const ServiceGrid = ({ children }) => {
  return <div className={styles.serviceGrid}>{children}</div>;
};

export default ServiceGrid;
