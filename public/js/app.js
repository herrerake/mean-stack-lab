angular
  .module("stackLab", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("Question", [
    "$resource",
    Question
  ])
  .controller("indexCtrl", [
    "$state",
    "Question",
    indexController
  ])

  function Router ($stateProvider) {
    $stateProvider
      .state("welcome", {
        url: "/",
        templateUrl: "/assets/js/ng-views/welcome.html"
      })
      .state("index", {
        url: "/questions",
        templateUrl: "/assets/js/ng-views/index.html",
        controller: "indexCtrl",
        controllerAs: "vm"
      })
  }

  function Question ($resource) {
    return $resource("/questions/:title", {}, {
      update: {method: "PUT"}
    })
  }

  function indexController ($state, Question) {
    this.questions = Question.query()
  }
