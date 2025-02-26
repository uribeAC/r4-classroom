import { showErrorModal } from "../../dom/index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";

export const getCoursesTotal = (courses: Course[]): number => {
  return courses.length;
};

export const addCourse = (courses: Course[], courseName: string): void => {
  const newCourse: Course = {
    id: generateId(courses),
    name: courseName,
  };

  if (courses.some((course) => course.name === courseName)) {
    showErrorModal("Error: El curso ya existe");
    return;
  }

  courses.push(newCourse);
};

export const deleteCourse = (courses: Course[], id: number): void => {
  const idIndex = courses.findIndex((course) => course.id === id);

  courses.splice(idIndex, 1);
};

// Crea una función para obtener las opciones de cursos para rellenar un select
// La función debe recibir un array de cursos
// La función debe devolver un array de objetos con dos propiedades: id y name
// La propiedad id debe ser el id del curso
// La propiedad name debe ser el nombre del curso
// export const getCoursesOptions =
