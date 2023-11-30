import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../ui/Card";
import { courseCardData } from "../../constants/courseCard";
import styles from "./index.module.css";
import Button from "../ui/Button";
import { enrollmentService } from "../../services/enrolmentServices";

interface LoadingStates {
  [key: string]: boolean;
}

/**

 * This component renders a list of course cards with enroll buttons.
 * Each card has a title, image, price, and an enroll button.

**/

const Courses = () => {
  /**
   * An object to track the loading state for each course card.
   * The keys are course IDs, and values indicate whether the card is in a loading state.
   */
  const [loadingStates, setLoadingStates] = useState<LoadingStates>({});

  /**
   * Handle Enroll Function (Dummy)
   *
   * Simulates an asynchronous enrollment process for demonstration purposes.
   * Updates the loading state for a specific course card during enrollment.
   */

  const handleEnroll = async (id: string) => {
    setLoadingStates((prevStates) => ({ ...prevStates, [id]: true }));

    const enrollmentResult = await enrollmentService.enroll();

    if (enrollmentResult.success) {
      toast("You have Successfully Enrolled the course.");
    } else {
      toast(`Error enrolling in the course. Please try again.`);
    }

    setLoadingStates((prevStates) => ({ ...prevStates, [id]: false }));
  };

  return (
    <section>
      <div className={styles.courseContainer}>
        {courseCardData.map((course) => (
          // reusealbe card component accepts title , image , price, onClick and optional subtitle , className
          <Card
            key={course.id}
            title={course.title}
            subtitle={course.subtitle}
            image={course.image}
            price={course.price}
          >
            {/* reUsuable Button , accept name, backgroundColor, hoverBackgroundColor and a optional className*/}
            <Button
              name="Enroll"
              backgroundColor="bg-primary-n_blue"
              hoverBackgroundColor="bg-primary-n_blue_light"
              onClick={() => handleEnroll(course.id)}
            >
              {/* children of button component */}

              {loadingStates[course.id] || false ? (
                <FontAwesomeIcon icon={faSpinner} spin size="lg" />
              ) : (
                "Enroll Now"
              )}
            </Button>
          </Card>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
};
export default Courses;
