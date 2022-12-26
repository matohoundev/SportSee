import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/mockedData";

export default class ApiServicesMock {
  getUserById(id) {
    return new Promise((resolve, reject) => {
      const user = USER_MAIN_DATA.find((user) => user.id === parseInt(id));
      if (user) {
        resolve({ data: user });
      } else {
        reject({ error: "user not found" });
      }
    });
  }

  getUserActivityById(id) {
    return new Promise((resolve, reject) => {
      const user = USER_ACTIVITY.find((user) => user.userId === parseInt(id));
      if (user) {
        resolve({ data: user });
      } else {
        reject({ error: "user not found" });
      }
    });
  }

  getUserAverageSession(id) {
    return new Promise((resolve, reject) => {
      const user = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === parseInt(id)
      );
      if (user) {
        resolve({ data: user });
      } else {
        reject({ error: "user not found" });
      }
    });
  }

  getUserPerformance(id) {
    return new Promise((resolve, reject) => {
      const user = USER_PERFORMANCE.find(
        (user) => user.userId === parseInt(id)
      );
      if (user) {
        resolve({ data: user });
      } else {
        reject({ error: "user not found" });
      }
    });
  }
}
