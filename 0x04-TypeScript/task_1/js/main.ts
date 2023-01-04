interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: 'paul',
  lastName: 'alx',
  age: 10,
  location: 'Abidjan',
};

const s2: Student = {
  firstName: 'paul1',
  lastName: 'alx1',
  age: 11,
  location: 'Abidjan',
};

const studentList = [s1, s2];
