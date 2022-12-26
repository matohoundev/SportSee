export default class ApiServices {
  constructor() {
    this.url = "http://localhost:3000/user/";
  }
  getUserById(id) {
    return fetch(`${this.url}${id}`)
      .then((response) => {
        if (response.status === 404) {
          window.location.replace("/user/12");
        } else {
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  }

  getUserActivityById(id) {
    return fetch(`${this.url}${id}/activity`)
      .then((response) => {
        if (response.status === 404) {
          window.location.replace("/user/12");
        } else {
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  }

  getUserAverageSession(id) {
    return fetch(`${this.url}${id}/average-sessions`)
      .then((response) => {
        if (response.status === 404) {
          window.location.replace("/user/12");
        } else {
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  }

  getUserPerformance(id) {
    return fetch(`${this.url}${id}/performance`)
      .then((response) => {
        if (response.status === 404) {
          window.location.replace("/user/12");
        } else {
          return response.json();
        }
      })
      .catch((error) => console.log(error));
  }
}
