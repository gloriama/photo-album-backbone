var AppView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  template: _.template('<tr><td><%= photo.title %></td></tr>'),

  render: function() {
    var selector = $('<table>');
    var that = this;
    selector.html(this.model.get('photos').map(function(photo) {
      return that.template({
        photo: photo
      });
    }));

    this.$el.html('<p>Photo Album</p>');
    this.$el.append(selector);

    return this.$el;
  }
});