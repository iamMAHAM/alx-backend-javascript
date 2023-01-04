interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const s1: Student = {
  firstName: 'abdul',
  lastName: 'maham',
  age: 10,
  location: 'Abidjan',
};

const s2: Student = {
  firstName: 'abdul1',
  lastName: 'maham1',
  age: 11,
  location: 'Abidjan',
};

const studentsList: Student[] = [s1, s2];

const body: HTMLBodyElement = document.createElement('body');
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const rowHead: HTMLTableRowElement = thead.insertRow(0);
const c1Title: HTMLTableCellElement = rowHead.insertCell(0);
const c2Title: HTMLTableCellElement = rowHead.insertCell(1);

c1Title.innerHTML = 'firstName';
c2Title.innerHTML = 'location';
table.append(thead);

studentsList.forEach((s) => {
  const row: HTMLTableRowElement = tbody.insertRow(0);
  const c1: HTMLTableCellElement = row.insertCell(0);
  const c2: HTMLTableCellElement = row.insertCell(1);

  c1.innerHTML = s.firstName;
  c2.innerHTML = s.location;
});

table.append(tbody);
body.append(table);
