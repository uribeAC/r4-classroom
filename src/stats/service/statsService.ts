import { courses, grades } from "../../index.js";
import { CourseStats } from "../../types";

export const getCourseStats = (courseId: number): CourseStats => {
  const courseGrades = grades.filter((grade) => courseId === grade.courseId);
  const sortedGrades = courseGrades.sort(
    (gradeA, gradeB) => gradeA.value - gradeB.value
  );

  let averageCourseGrade = 0;
  sortedGrades.forEach(
    (grade) => (averageCourseGrade = averageCourseGrade + grade.value)
  );

  const approveGrade = 5;
  const passedGrades = sortedGrades.filter(
    (grade) => grade.value >= approveGrade
  );

  const passedCountPercentage =
    (passedGrades.length * 100) / sortedGrades.length;

  const courseStats: CourseStats = {
    courseId: courseId,
    studentsCount: courseGrades.length,
    passedCount: passedGrades.length,
    passedCountPercentage: passedCountPercentage,
    failedCount: sortedGrades.length - passedGrades.length,
    failedCountPercentage: 100 - passedCountPercentage,
    averageGrade: averageCourseGrade / sortedGrades.length,
    highestGrade: sortedGrades.at(-1)!.value,
    highestGradeStudentId: sortedGrades.at(-1)!.studentId,
  };

  return courseStats;
};
