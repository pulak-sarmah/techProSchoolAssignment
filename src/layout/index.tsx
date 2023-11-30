import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "./index.module.css";

/**
 * Layout Component
 *
 * A higher-order component representing the overall layout of the application.
 * It includes a header main section and a footer.
 **/

const Layout = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <Navbar />
      </header>
      <main className={styles.mainContainer}>
        <Hero />
      </main>
    </>
  );
};

export default Layout;
