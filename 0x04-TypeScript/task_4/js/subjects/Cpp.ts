/// <reference path='Subject.ts' />

namespace Subjects {
  export interface Teacher {
    experienceTeaching: number;
  }

  export class Cpp extends Subjects {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher() {
      return this.teacher.experienceTeaching > 0
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
