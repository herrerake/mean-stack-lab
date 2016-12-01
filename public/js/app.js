angular
  .module("stackLab", [
    "ui.router",
    "ng-resource"
  ])
  .config([
    "$stateProvider",
    Router
  ])

  function Router ($stateProvider) {
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/assets/js/ng-views/welcome.html"
      })
  }
