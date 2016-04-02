var ViewportView = Backbone.View.extend({
  template: _.template('<p><%= title %></p><img src="<%= url %>" width="400" />'),

  setCurrentPhoto: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      title: this.model.get('title'),
      url: this.model.get('url')
    }));
    return this.$el;
  }
})