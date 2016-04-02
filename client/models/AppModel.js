var AppModel = Backbone.Model.extend({
  initialize: function(params) {
    this.set('photos', params.collection);
    this.set('currentPhoto', params.collection.at(0));
    var that = this;
    params.collection.on('setCurrentPhoto', function(model) {
      that.set('currentPhoto', model);
    });
  }
});