export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "First",
  lastName: "Student",
  age: 20,
  location: "Cameroon",
};

const student2: Student = {
  firstName: "First",
  lastName: "Student",
  age: 24,
  location: "Zimbabwe",
};

const studentsList: Array<Student> = [student1, student2];

function render(students: Array<Student>) {
  const table = document.createElement("TABLE");
  const tHead = document.createElement("THEAD");
  const tr = document.createElement("TR");
  const tbody = document.createElement("TBODY");
  Object.keys(students[0]).forEach((v) => {
    const th = document.createElement("TH");
    th.innerText = v;
    tr.appendChild(th);
  });
  tHead.appendChild(tr);
  table.appendChild(tHead);
  students.forEach((student: Student) => {
    const tr_2 = document.createElement("TR");
    Object.values(student).forEach((v) => {
      const td = document.createElement("TD");
      td.innerText = v.toString();
      tr_2.appendChild(td);
    });
    tbody.appendChild(tr_2);
  });
  table.appendChild(tbody);
  document.querySelector("body")?.appendChild(table);
}

render(studentsList);
