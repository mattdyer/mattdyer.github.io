(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>mattdyer.us</h1>' +
      '<a href="/">Home</a>' + 
      '<a href="http://codebjournal.mattdyer.us">BJournal</a>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));