import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { Student } from "../../types.js";
import { selectedStudent } from "../../types.js";
import { generateId } from "../../utils.js";

export const getStudentsTotal = (students: Student[]): number => {
  return students.length;
};

console.log(generateId(students));
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

// Crea una función para obtener las opciones de estudiantes para rellenar un select
// La función debe recibir un array de estudiantes
// La función debe devolver un array de objetos con tres propiedades: id, name y lastName
// La propiedad id debe ser el id del estudiante
// La propiedad name debe ser el nombre del estudiante
// La propiedad lastName debe ser el apellido del estudiante
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
  //selectStudents.push({
  //id: students[1].id,
  //name: students[1].name,
  //lastName: students[1].lastName,
  //});

  return selectStudents;
};

// Crea una función para obtener el nombre completo de un estudiante por su id
// La función debe recibir un array de estudiantes y el id del estudiante
// export const getStudentNameById =
