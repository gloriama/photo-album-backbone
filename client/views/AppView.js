var AppView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html('Hello, World!');
    return this.$el;
  }
});