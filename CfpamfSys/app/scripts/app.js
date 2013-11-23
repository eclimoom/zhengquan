/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-11-23
 * Time: 下午3:12
 * To change this template use File | Settings | File Templates.
 */
var app = angular.module('app',[]);

/* in 34/64 */
app.directive('cmpTopNav',function(){
   return {
       restrict:'E',
       replace:true,
       templateUrl:'templates/cmpTopNav.html',
       scope:true,
       link:function(scope){
           scope.title = "hello world!";
       }
   }
});
