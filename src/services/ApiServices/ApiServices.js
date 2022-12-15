export default class ApiServices {
  constructor() {
    this.url = "http://localhost:3000/user/";
  }
  getUserById(id) {
    return fetch(`${this.url}${id}`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  getUserActivityById(id) {
    return fetch(`${this.url}${id}/activity`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  getUserAverageSession(id) {
    return fetch(`${this.url}${id}/averageSession`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }

  getUserPerformance(id) {
    return fetch(`${this.url}${id}/performance`)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
