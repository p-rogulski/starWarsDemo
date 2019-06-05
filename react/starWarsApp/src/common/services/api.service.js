import axios from "axios";

const api = axios.create({
  baseURL: "http://10.90.142.203:8080/",
});


export class ApiREST {
  static post(url, data, successCallback, errorCallback) {
    return api
      .post(url, data)
      .then(response => successCallback(response.data))
      .catch(error => errorCallback(error));
  }

  static put(url, data, successCallback, errorCallback) {
    return api
      .put(url, data)
      .then(response => successCallback(response.data))
      .catch(error => errorCallback(error));
  }

  static get(url, successCallback, errorCallback) {
    return api
      .get(url)
      .then(response => successCallback(response.data))
      .catch(error => errorCallback(error));
  }

  static delete(url, successCallback, errorCallback) {
    return api
      .headers(url)
      .then(response => successCallback(response.data))
      .catch(error => errorCallback(error));
  }
}
