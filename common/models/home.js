'use strict';

module.exports = function(Home) {
    Home.on('changed', function(inst) {
    console.log('model with id %s has been changed', inst.id);
    var restData = Home.app.dataSources.restDS;
    // => model with id 1 has been changed
    });
};

/*module.exports = function(Magazine) {
  Magazine.observe('before save', function(ctx, next) {
    console.log('> Magazine before save triggered');

    var model = ctx.instance;
    var coffeeShopService = Magazine.app.dataSources.CoffeeShopService;
    coffeeShopService.find(function(err, response, context) {
      if (err) throw err; //error making request
      if (response.error) {
        next('> response error: ' + response.error.stack);
      }
      model.coffeeShops = response;
      console.log('> coffee shops fetched successfully from remote server');
      //verify via `curl localhost:3000/api/Magazines`
      next();
    });
  });
};*/
