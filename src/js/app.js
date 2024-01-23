export default class Team {
  constructor() {
      this.members = new Set();
  }
  add(Charter) {
    if (!this.members.has(Charter)){
      this.members.add(Charter);
    } else {
      throw new Error('Персонаж уже в команде');
    }
  }

  addAll(...AllCharter) { 
    AllCharter.forEach((charter) => this.members.add(charter));
  }

  toArray() {
    return [...this.members];
  }
}