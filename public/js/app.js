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
  .controller("showCtrl", [
    "$state",
    "$stateParams",
    "Question",
    showController
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
      .state("show", {
        url: "/questions/:title",
        templateUrl: "/assets/js/ng-views/show.html",
        controller: "showCtrl",
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
    this.newQuestion = new Question()
    this.create = function() {
      this.newQuestion.$save().then(function(question) {
        $state.go("show", {title: question.title})
      })
    }
  }


  function showController ($state, $stateParams, Question) {
    this.question = Question.get({title: $stateParams.title})
    this.update = () => {
      this.question.$update({title: $stateParams.title})
    }
    this.destroy = () => {
      this.question.$delete({title: $stateParams.title}).then(() => {
        $state.go("index")
      })
    }
  }
