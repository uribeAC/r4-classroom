import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { selectedGrade } from "../../types";
import { Course } from "../../types";
import { Student } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => {
  return grades.length;
};

export const getGradeFullData = (grade: Grade): selectedGrade => {
  const gradeStudent = students.find(
    (student) => student.id === grade.studentId
  )!;
  const gradeCourse = courses.find((course) => course.id === grade.courseId)!;

  const selectGrade: selectedGrade = {
    id: grade.id,
    studentId: grade.studentId,
    courseId: grade.courseId,
    value: grade.value,
    studentName: gradeStudent.name,
    studentLastName: gradeStudent.lastName,
    courseName: gradeCourse.name,
  };

  return selectGrade;
};

export const deleteGrade = (grades: Grade[], gradeId: number): void => {
  const gradeIndex = grades.findIndex((grade) => grade.id === gradeId);

  grades.splice(gradeIndex, 1);
};

export const addGrade = (
  grades: Grade[],
  studentId: number,
  courseId: number,
  gradeNumber: number
): void => {
  if (
    grades.some(
      (grade) => grade.courseId === courseId && grade.studentId === studentId
    )
  ) {
    showErrorModal("Error: Esta nota ya existe");
    return;
  }

  const newGrade: Grade = {
    id: generateId(grades),
    studentId: studentId,
    courseId: courseId,
    value: gradeNumber,
  };

  grades.push(newGrade);
};
