var AdderView = Backbone.View.extend({
  initialize: function() {
    this.$titleInput = $('<input type="text" placeholder="Title" />');
    this.$urlInput = $('<input type="text" placeholder="URL" />');
    this.$submitButton = $('<input type="button" value="Submit" />');
  },

  render: function() {
    this.$el.html([
      this.$titleInput,
      this.$urlInput,
      this.$submitButton
    ]);
    return this.$el;
  }
});