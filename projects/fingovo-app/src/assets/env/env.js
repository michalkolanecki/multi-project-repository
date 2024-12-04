/**
 * This will allow us to configure docker image without
 * rebuilding for changing env variables like endpoints
 */
(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["apiUrl"] = "https://fingovo.pl";
})(this);
