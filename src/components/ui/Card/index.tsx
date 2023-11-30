import styles from "./index.module.css";

export type CourseCardType = {
  title: string;
  image: string;
  price: string;
  children: React.ReactNode;
  loading?: boolean;
  subtitle?: string;
  className?: string;
};

const Card = ({
  title,
  subtitle,
  image,
  price,
  className,
  children,
}: CourseCardType) => {
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
        {children}
      </div>
    </div>
  );
};

export default Card;
