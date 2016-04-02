// View that receives a model of type PhotoModel
var SelectorEntryView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  template: _.template('<tr><td><%= title %></td></tr>'),

  render: function() {
    this.$el.html(this.template({ title: this.model.get('title') }));
    return this.$el;
  }
});