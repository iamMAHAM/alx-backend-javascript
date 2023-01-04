interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: number;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
