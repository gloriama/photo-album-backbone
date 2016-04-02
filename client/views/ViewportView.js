var ViewportView = Backbone.View.extend({
  initialize: function() {
    this.render();
    this.model.on('change', function() {
      this.render();
    }.bind(this));
  },

  template: _.template(
    '<p><%= title %></p>' + 
    '<img src="<%= url %>" width="400" />' +
    '<p>Rating: <%= rating %></p>'),

  setCurrentPhoto: function(model) {
    this.model = model;
    this.initialize();
  },

  render: function() {
    this.$el.empty();
    this.$el.append($(this.template(this.model.attributes)));
    var updaterView = new UpdaterView({
      model: this.model
    });
    this.$el.append(updaterView.render());
    return this.$el;
  }
})