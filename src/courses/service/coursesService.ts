import { showErrorModal } from "../../dom/index.js";
import { courses } from "../../index.js";
import { Course } from "../../types";
import { selectedCourse } from "../../types";
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

export const getCoursesOptions = (courses: Course[]): selectedCourse[] => {
  const selectCourses: selectedCourse[] = [];

  for (let index = 0; index < courses.length; index++) {
    const newObjectCourse: selectedCourse = {
      id: courses[index].id,
      name: courses[index].name,
    };
    selectCourses.push(newObjectCourse);
  }

  return selectCourses;
};

console.log(getCoursesOptions(courses));
console.log("hola");
