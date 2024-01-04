class ClassRoom {
  constructor(roomSize) {
    this._maxStudentsSize = roomSize;
  }
}

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
