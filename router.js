app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('home');

  $stateProvider

  .state("home", {
    url: "/home",
    templateUrl: "./views/add.html",
    controller: "addCtrl"
  })

  .state("showMeTheMoney", {
    url: "/showMeTheMoney",
    templateUrl: "./views/showMeTheMoney.html",
    controller: "showMeTheMoneyCtrl"
  })

})
