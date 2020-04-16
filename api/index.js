"use strict";

module.exports = {
  createSession: function createSession(credentials) {
    return new Promise(function (resolve, reject) {
      if (!credentials || !credentials.username || !credentials.password) {
        return reject(new Error("Invalid credentials"));
      }

      return window.setTimeout(function () {
        document.cookie = "SESSION=e90e2f19-2abc-4e71-a35f-21dedc54c332";
        return resolve({
          success: true
        });
      }, 1000);
    });
  },
  getProfile: function getProfile() {
    return new Promise(function (resolve, reject) {
      if (document.cookie.indexOf("SESSION") === -1) {
        return reject("401 Unauthorised");
      }

      return window.setTimeout(function () {
        return resolve({
          username: "Adam"
        });
      }, 1000);
    });
  },
  signout: function signout() {
    return new Promise(function (resolve) {
      document.cookie = "SESSION=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      return resolve();
    });
  }
};
