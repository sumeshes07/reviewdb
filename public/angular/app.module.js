(function() {
  function HomeController($http) {
    console.log("Controller");
    var ctrl = this;
    function GetTag() {
      $http.get("/masterdata/tags", null).then(successCallback);
    }

    function successCallback(response) {
        console.log(response)
    }
    ctrl.GetTag = GetTag;
  }
  angular.module("reviewApp", []).controller("HomeController", HomeController);
})();
