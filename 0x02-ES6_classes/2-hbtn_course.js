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

  set _name(x) {
    this._name = x;
  }

  get _length() {
    return this._length;
  }

  set _length(x) {
    if (typeof length !== "number") throw TypeError("length must be a number");
    this._length = x;
  }

  get _students() {
    return this._students;
  }

  set _students(x) {
    if (!Array.isArray(x)) throw TypeError("students must be an Array");
    for (const student of x) {
      if (typeof student !== "string")
        throw TypeError("students must contain strings");
    }
    this._students = x;
  }
}
