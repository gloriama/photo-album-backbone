// View that receives collection of type PhotoCollection
var SelectorView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.empty();
    this.$el.append(this.collection.map(function(photo) {
      return new SelectorEntryView({ model: photo }).render();
    }));
    return this.$el;
  }
});