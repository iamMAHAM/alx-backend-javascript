interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectoryTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork() {
    // i think this is a mistake for alx
    return 'Getting a coffee break';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectoryTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: string | number): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
  return isDirector(employee)
    ? new Director().workDirectoryTasks()
    : employee instanceof Teacher
    ? new Teacher().workTeacherTasks()
    : '';
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
