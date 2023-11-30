/**
 * Enrollment Service
 *
 * This service provides functions related to course enrollment.
 * It includes a function to simulate an asynchronous enrollment process.
 */

/**
 * Simulates an asynchronous enrollment process for demonstration purposes.
 * Delays execution by 1 second and then returns a success or error response.
 * If successful, `success` is true; otherwise, `success` is false, and an optional `error` field contains the error information.
 */

const enroll = async () => {
  try {
    // Simulate an asynchronous operation with a 1-second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Simulate a successful enrollment
    return { success: true };
  } catch (error) {
    // Handle error scenarios
    console.error("Enrollment failed:", error);
    return { success: false, error };
  }
};

// Export the functions as part of the enrollmentService object
export const enrollmentService = {
  enroll,
};
