(function () {
  angular.module('admin.fake_api')
    .run(['$httpBackend',
      function($httpBackend) {

        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenPOST('/auth').respond({status: 200});
        $httpBackend.whenGET(/\/user\/.*/).respond(getUser);// whenGET('/user/:id')
        $httpBackend.whenGET(/\/users\/getAll/).respond(getUsers);
    }]);

  function getUser(){
    return [200, {
      'name':'FirstName LastName',
      'orders':"Choosed user's orders",
      'transaction':"Choosed user's transactions",
      'accruals':"Choosed user's accruals"
    }];
  };

  function getUsers(method,url,data){
    var start = url.indexOf('limit=')+ 6,
        end = url.indexOf("&"),
        limit = parseInt(url.slice(start).slice(0,end-start));
    return [200,{'users':fake_users(limit), 'count':275}];
  };

  function fake_users (limit) {
    limit = (limit)?limit:275;
    var users = [],
        i = 0;

    for (i; i<limit;i++)

    users.push(
    {
      'id':i+1,
        'date':new Date(),
        'exchange':'bitfinex',
        'userType':'normal',
        'ghs':'25 GHS',
        'mining': '0.9565441 BTC',
        'orders': Math.floor((Math.random() * 100) + 1),
        'actions':'view'
    });
    return users;
  };


}).call();