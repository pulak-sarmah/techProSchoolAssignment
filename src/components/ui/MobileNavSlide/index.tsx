import styles from "./index.module.css";

// Props interface for OpenMobileNavSlide component
interface OpenMobileNavSlideProps {
  children?: React.ReactNode;
  openMobileNav: boolean;
}

// OpenMobileNavSlide component that slides in from the right or left based on the openMobileNav prop
const OpenMobileNavSlide = ({
  children,
  openMobileNav,
}: OpenMobileNavSlideProps) => {
  return (
    <div
      className={`${styles.mobileNavSlide} ${
        openMobileNav ? " right-[100%]" : "left-[-100%]"
      }`}
    >
      {children}
    </div>
  );
};

export default OpenMobileNavSlide;
