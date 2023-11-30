import Card from "../ui/Card";
import { courseCardData } from "../../constants/courseCard";
import styles from "./index.module.css";

const Courses = () => {
  return (
    <section className="">
      <div className={styles.courseContainer}>
        {courseCardData.map((course) => (
          // reusealbe card component accepts title , image , price and optional subtitle , className
          <Card
            key={course.id}
            title={course.title}
            subtitle={course.subtitle}
            image={course.image}
            price={course.price}
          />
        ))}
      </div>
    </section>
  );
};
export default Courses;
