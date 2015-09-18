app.controller("showMeTheMoneyCtrl", function($scope, $location, $http){
  var savedStocks = localStorage["stocks"]
  $scope.stocks = savedStocks.split(",")
  $scope.lastDayValues= {};
  $scope.changes = {};
  function autoRecallCashForClunkersAutopocalypseAndCheese(){
    console.log("the duck chuck the muck from the buck while he clucked and f...");
    $scope.stocks.forEach(function(stock){
      $http.jsonp("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+stock+"&callback=JSON_CALLBACK")
      .success (function(data) {
        if(data.Message){
          $scope.lastDayValues[stock] = "No Price Found"
        }else{
          $scope.lastDayValues[stock] = data["LastPrice"];
          $scope.changes[stock] = {change: data["Change"].toFixed(2), percentChange: data["ChangePercent"].toFixed(2)};
          if ($scope.changes[stock].change < 0){
            $scope.changes[stock].red = true
          }
        }
      })
    })
  }
  var intervalID = setInterval(autoRecallCashForClunkersAutopocalypseAndCheese, 60000)
  autoRecallCashForClunkersAutopocalypseAndCheese()
  $scope.remove = function(stock){
    $scope.stocks.splice($scope.stocks.indexOf(stock), 1);
    localStorage["stocks"] = $scope.stocks.join(",")
  }
})
