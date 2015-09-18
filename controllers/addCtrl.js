app.controller("addCtrl", function($scope, $location){
  var arr = []
  if(localStorage["stocks"]) {
    arr = localStorage["stocks"].split(",")
  }
  $scope.stocks = []
  $scope.stocks.push.apply($scope.stocks, arr)
  $scope.title = "Stock Tracker";
  $scope.silentProtest = function(stock){
    if(stock === undefined || $scope.stocks.indexOf(stock)!==-1){
      $scope.stock = ""
      return;
    }
    stock = stock.replace(/\s/g, "")
    if(!(stock.length)){
      return
    }
    $scope.stocks.push(stock);
    $scope.stock = ""
  }
  $scope.save= function() {
    localStorage["stocks"] = ($scope.stocks).join(",");
  }
})
