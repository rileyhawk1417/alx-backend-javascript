export default class HolbertonCourse {
  constructor(name, length, students) {
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
    this._length = x;
  }

  get _students() {
    return this._students;
  }

  set _students(x) {
    this._students = x;
  }
}
