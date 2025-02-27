import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { Student } from "../../types.js";
import { selectedStudent } from "../../types.js";
import { generateId } from "../../utils.js";

export const getStudentsTotal = (students: Student[]): number => {
  return students.length;
};

export const addStudent = (
  students: Student[],
  name: string,
  lastName: string,
  age: number,
  email: string,
  phoneNumber: string
): void => {
  const newStudent: Student = {
    id: generateId(students),
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    phoneNumber: phoneNumber,
  };

  if (students.some((student) => student.email === newStudent.email)) {
    showErrorModal("Error: El estudiante ya esta en la lista");
    return;
  }

  students.push(newStudent);
};

export const deleteStudent = (students: Student[], id: number): void => {
  const idIndex = students.findIndex((student) => student.id === id);

  students.splice(idIndex, 1);
};

export const getStudentsOptions = (students: Student[]): selectedStudent[] => {
  const selectStudents: selectedStudent[] = [];

  for (let index = 0; index < students.length; index++) {
    const newObjectStudent: selectedStudent = {
      id: students[index].id,
      name: students[index].name,
      lastName: students[index].lastName,
    };
    selectStudents.push(newObjectStudent);
  }

  return selectStudents;
};

// Crea una función para obtener el nombre completo de un estudiante por su id
// La función debe recibir un array de estudiantes y el id del estudiante
export const getStudentNameById = (
  students: Student[],
  studentId: number
): string => {
  const student = students.find((student) => student.id === studentId)!;

  return student.name + " " + student.lastName;
};
