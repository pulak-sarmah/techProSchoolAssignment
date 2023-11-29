import styles from "./index.module.css";

// Header component with children prop
const Header = ({ children }: { children: React.ReactNode }) => {
  return <header className={styles.headerContainer}>{children}</header>;
};

export default Header;
