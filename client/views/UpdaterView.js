var UpdaterView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  tagName: 'select',

  events: {
    change: function(e) {
      this.model.set('rating', $(e.target).val());
    }
  },

  template: _.template(
    '<option value="-1">-1</option>' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>'
  ),

  render: function() {
    this.$el.html(this.template());
    this.$el.val(this.model.get('rating'));
    return this.$el;
  }
});