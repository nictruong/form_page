Backbone.View.prototype.close = function() {
    if (this.onClose) {
        this.onClose();
    }
  	this.remove();
    this.unbind();
};

CounterItemView = Backbone.Marionette.ItemView.extend({
	template: "#counter_template",

	events: {
		"click #remove_button" : "removeSelf"
	},

	initialize: function(options) {
		this.collection = options.collection;
	},

	removeSelf: function() {
		this.collection.remove(this.model);
		this.close();
	}
});

CounterCollectionView = Backbone.Marionette.CollectionView.extend({
	childView: CounterItemView,

	childViewOptions: function() {
		return {
			collection: this.collection
		};
	}
});
