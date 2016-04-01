var AppView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  template: _.template('<p>Photo Album</p><p><%= photos[0].title %></p>'),

  render: function() {
    this.$el.html(this.template({
      photos: this.model.get('photos')
    }));
    return this.$el;
  }
});