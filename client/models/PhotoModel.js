var PhotoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    url: '',
    rating: 0
  },

  initialize: function(params) {
    this.set('title', params.title);
    this.set('url', params.url);
  }
});