// View that receives a model of type PhotoModel
var SelectorEntryView = Backbone.View.extend({
  tagName: 'tr',

  initialize: function() {
    this.render();
  },

  events: {
    click: function() {
      this.model.setCurrentPhoto();
    }
  },

  template: _.template('<td><%= title %></td>'),

  render: function() {
    this.$el.html(this.template({ title: this.model.get('title') }));
    return this.$el;
  }
});