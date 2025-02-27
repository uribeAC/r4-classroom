import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { selectedGrade } from "../../types";
import { Course } from "../../types";
import { Student } from "../../types";
import { generateId } from "../../utils.js";

// Crea una función para obtener el total de notas
// La función debe recibir un array de notas y devolver el total de notas
export const getGradesTotal = (grades: Grade[]): number => {
  return grades.length;
};

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName
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

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
// export const deleteGrade =

// Crea una función para crear una nueva nota
// La función debe recibir un array de notas, el id del estudiante, el id del curso y el valor de la nota
// Si la nota ya existe, muestra un error con showErrorModal
export const addGrade = (
  grades: Grade[],
  studentId: number,
  courseId: number,
  gradeNumber: number
): void => {
  if (
    grades.some(
      (grade) =>
        grade.courseId === courseId &&
        grade.studentId === studentId &&
        grade.value == gradeNumber
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
