angular.module("myApp.services", []).factory("Item", function($resource) {
  // Item factory uses $resource to map on to the RESTful webservice
     return $resource('/api/items/:id', {
              id: '@id'
     },
     {
            update: {
                 method: "PUT"
     },
          remove: {
                 method: "DELETE"
     }
  });
});
