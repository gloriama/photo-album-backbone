var AppView = Backbone.View.extend({
  initialize: function() {
    this.adderView = new AdderView({ collection: this.model.get('photos') });
    this.selectorView = new SelectorView({ collection: this.model.get('photos') });
    this.viewportView = new ViewportView({ model: this.model.get('currentPhoto') });
    var that = this;
    this.model.on('change:currentPhoto', function(model) {
      that.viewportView.setCurrentPhoto(model.get('currentPhoto'));
    });
  },

  render: function() {
    this.$el.html('<p>Photo Album</p>');
    this.$el.append(this.adderView.render());
    this.$el.append(this.selectorView.render());
    this.$el.append(this.viewportView.render());

    return this.$el;
  }
});