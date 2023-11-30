import Button from "../Button";

import styles from "./index.module.css";

export type CourseCardType = {
  title: string;
  image: string;
  price: string;
  subtitle?: string;
  className?: string;
};

const Card = ({ title, subtitle, image, price, className }: CourseCardType) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {/* Course Image */}
      <img className={styles.cardImg} src={image} alt="Course Image" />

      {/* Course Content */}
      <div className={styles.cardCourse}>
        <div className={styles.textContent}>
          {/* Course Title */}
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardSubTitle}>{subtitle}</p>

          {/* Course Price */}
          <div className={styles.priceWrapper}>
            <p className={styles.price}>
              <span>₹</span>
              {price}
            </p>
          </div>
        </div>

        {/* reUsuable Button , accept name, backgroundColor, hoverBackgroundColor and a optional className*/}
        <Button
          name="Enroll"
          backgroundColor="bg-primary-n_blue"
          hoverBackgroundColor="bg-primary-n_blue_light"
        />
      </div>
    </div>
  );
};

export default Card;
