// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table class='queue'",

  initialize: function() {
  	this.render();

  	this.collection.on('add', function(){
  		this.render();
  	},this);

  	this.collection.on('remove', function(){
  		this.render();
  	}, this);
  },

  render: function() {

  	//similar function to library view
  	this.$el.children().detach();

  	this.$el.html('<th>Song Queue</th>').append(
  		this.collection.map(function(song){
  			return new SongQueueEntryView({model: song}).render();
  		})
	);
  }

});
