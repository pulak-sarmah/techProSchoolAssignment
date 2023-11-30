/**
 * Hero Component
 * Displays a title, subtitle, and an illustration image.
 **/

import styles from "./index.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div
          //  animated class from animate.css
          className={`${styles.heroTexts} animate__animated animate__slideInLeft`}
        >
          <h2 className={styles.title}> Our Courses</h2>
          <p className={styles.subTitle}>
            Expand your knowledge with our expertly crafted courses designed for
            learning and growth.
          </p>
        </div>

        <div
          className={`${styles.heroImgContainer} animate__animated animate__slideInRight`}
        >
          <img
            alt="Course Illustration"
            className={styles.heroImg}
            src="/hero_illustration.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
