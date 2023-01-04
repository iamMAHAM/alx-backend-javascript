/// <reference path='./subjects/Subject.ts' />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'abdul',
  lastName: 'maham',
  experienceTeachingC: 10,
};

console.log('c++');
cpp.setTeacher(cTeacher);
const req = cpp.getRequirements();
const isAvT = cpp.getAvailableTeacher();
console.log(req);
console.log(isAvT);

console.log('Java');
java.setTeacher(cTeacher);
const reqjav = java.getRequirements();
const isAvtJ = java.getAvailableTeacher();
console.log(reqjav);
console.log(isAvtJ);

console.log('React');
react.setTeacher(cTeacher);
const reqr = react.getRequirements();
const isAvtR = react.getAvailableTeacher();
console.log(reqr);
console.log(isAvtR);
