var AppView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  selectorTemplate: _.template('<tr><td><%= photo.title %></td></tr>'),

  viewPortTemplate: _.template('<p><%= currentPhoto.title %></p><img src="<%= currentPhoto.url %>" />'),

  render: function() {
    // Selector
    var selector = $('<table>');
    var that = this;
    selector.html(this.model.get('photos').map(function(photo) {
      return that.selectorTemplate({
        photo: photo
      });
    }));

    // ViewPort
    var viewPort = $('<div>');
    viewPort.html(this.viewPortTemplate({
      currentPhoto: this.model.get('currentPhoto')
    }));

    this.$el.html('<p>Photo Album</p>');
    this.$el.append(selector);
    this.$el.append(viewPort);

    return this.$el;
  }
});