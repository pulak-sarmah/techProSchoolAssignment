import { useState } from "react";

import { navLinks } from "../../constants/navLinks";
import styles from "./index.module.css";
import OpenMobileNavSlide from "../ui/MobileNavSlide";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  // State to manage the mobile navigation menu's open/close state
  const [openMobileNav, setOpenMobileNav] = useState(false);

  // Function to handle clicks on navigation links
  const handleNavLinks = () => {
    // Currently commented out, may add logic here to navigate to clicked navLinks
    setOpenMobileNav(false);
    // Here we would have logic to navigate to the clicked navLinks.
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo section */}
      <div
        className={`${styles.logoWrapper} animate__animated animate__fadeIn`}
      >
        <h1 className={styles.logo}>TechProSchool</h1>
      </div>

      {/* Desktop navigation links */}

      <div className={styles.navlinksWrapper}>
        <ul className={styles.navlinksList}>
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={handleNavLinks}
              className={`${styles.navLink} ${
                item.active ? "bg-primary-grey_light " : ""
              }`}
            >
              {item.link}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation icon */}

      <div
        className={styles.navIcon}
        onClick={() => setOpenMobileNav(!openMobileNav)}
      >
        {openMobileNav ? (
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            style={{ color: "#000000" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{ color: "#000000" }}
          />
        )}
      </div>

      {/* Backdrop for the mobile navigation menu */}

      {openMobileNav && (
        <div
          className={`animate__animated animate__fadeIn ${styles.backDrop}`}
          onClick={() => setOpenMobileNav(false)}
        ></div>
      )}

      {/* Mobile navigation menu */}

      <OpenMobileNavSlide openMobileNav={openMobileNav}>
        <ul className={styles.mobileNavList}>
          {navLinks.map((item) => (
            <li
              key={item.id}
              onClick={handleNavLinks}
              className={` ${styles.mobileNavLink} ${
                item.active ? "bg-white " : ""
              }`}
            >
              {item.link}
            </li>
          ))}
        </ul>
      </OpenMobileNavSlide>
    </nav>
  );
};

export default Navbar;
