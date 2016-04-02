var AppView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    click: function(e) {
      console.log(e.target.innerText);
    }
  },

  viewPortTemplate: _.template('<p><%= title %></p><img src="<%= url %>" />'),

  render: function() {
    // Selector
    var selectorView = new SelectorView({ collection: this.model.get('photos') });

    // ViewPort
    var viewPort = $('<div>');
    viewPort.html(this.viewPortTemplate({
      title: this.model.get('currentPhoto').get('title'),
      url: this.model.get('currentPhoto').get('url')
    }));

    this.$el.html('<p>Photo Album</p>');
    this.$el.append(selectorView.render());
    this.$el.append(viewPort);

    return this.$el;
  }
});