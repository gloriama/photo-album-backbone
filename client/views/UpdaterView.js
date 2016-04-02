var UpdaterView = Backbone.View.extend({
  tagName: 'select',

  template: _.template(
    '<option value="-1">-1</option>' +
    '<option value="0">0</option>' +
    '<option value="1">1</option>'
  ),

  render: function() {
    this.$el.html(this.template());
    this.$el.val(this.model.get('rating'));
    console.log(this.$el.val());
    return this.$el;
  }
});