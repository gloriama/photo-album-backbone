var ViewportView = Backbone.View.extend({
  initialize: function() {
    this.updaterView = new UpdaterView({
      model: this.model
    });
    this.render();
  },

  template: _.template(
    '<p><%= title %></p>' + 
    '<img src="<%= url %>" width="400" />' +
    '<p>Rating: <%= rating %></p>'),

  setCurrentPhoto: function(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));
    this.$el.append(this.updaterView.render());
    return this.$el;
  }
})