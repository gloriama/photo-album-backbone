var AdderView = Backbone.View.extend({
  initialize: function() {
    this.$titleInput = $('<input type="text" placeholder="Title" />');
    this.$urlInput = $('<input type="text" placeholder="URL" />');
    this.$submitButton = $('<input type="button" value="Submit" />');
  },

  events: {
    'click input[type=button]': function() {
      this.collection.add({
        title: this.$titleInput.val(),
        url: this.$urlInput.val()
      });
    }
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