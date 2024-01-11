export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") throw TypeError("name must be a string");
    if (typeof length !== "number") throw TypeError("length must be a number");
    if (!Array.isArray(students)) throw TypeError("name must be an Array");
    for (const student of students) {
      if (typeof student !== "string")
        throw TypeError("students must contain strings");
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get _name() {
    return this._name;
  }

  set _name(name) {
    this._name = name;
  }

  get _length() {
    return this._length;
  }

  set _length(length) {
    if (typeof length !== "number") throw TypeError("length must be a number");
    this._length = length;
  }

  get _students() {
    return this._students;
  }

  set _students(students) {
    if (!Array.isArray(students)) throw TypeError("students must be an Array");
    for (const student of students) {
      if (typeof student !== "string")
        throw TypeError("students must contain strings");
    }
    this._students = x;
  }
}
