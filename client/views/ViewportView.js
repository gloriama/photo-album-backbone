var ViewportView = Backbone.View.extend({
  template: _.template('<p><%= title %></p><img src="<%= url %>" width="400" /><p>Rating: <%= rating %></p>'),

  setCurrentPhoto: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
})