/// <reference path='Cpp.ts' />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects {
    getRequirements() {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher() {
      return this.teacher.experienceTeachingReact > 0
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
