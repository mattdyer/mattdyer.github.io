(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>mattdyer.us</h1>' +
      '<div><a href="/">Home</a></div>' + 
      '<div><a href="http://codebjournal.mattdyer.us">BJournal</a></div>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));