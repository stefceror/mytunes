// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="title"><%= title %></td><td>(<%= count %>)</td><td class="button">+</td>'),

  events: {
    'click .title': function() {
      // this.model.play(); //I think this will be handled by the queueueing?
      this.model.play();
    },
    'click .button': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
