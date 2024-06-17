angular.module('blog', [])
.controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens')
      .success(function(data) {
          $scope.publicacoes = data;
      }
  );
})
.controller('controllerPostagem', function ($scope, $http, $location){
  var id = new URLSearchParams($location.absUrl().split('?')[1]).get('id');
  $http.get('https://api-fake-blog.onrender.com/postagem/'+ id)
      .success(function(data) {
        $scope.postagem = data;
      }
    )
  });
