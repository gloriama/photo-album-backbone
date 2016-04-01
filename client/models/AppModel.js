var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('photos', params.photos);
  }
});