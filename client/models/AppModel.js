var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('photos', params.photos);
    this.set('currentPhoto', params.photos[0]);
  }
});