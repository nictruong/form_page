// SEARCH ITEMVIEW
SearchItemView = Backbone.Marionette.ItemView.extend({
	template: "#searchList_template",
	tagName: 'tr',

	events: {
		'click .domain_link' : 'clickEvent'
	},

	clickEvent: function() {
		MyApp.trigger('pageChosen', this.model);
	}
});


// SEARCH COLLECTIONVIEW
SearchCollectionView = Backbone.Marionette.CollectionView.extend({
	childView: SearchItemView,
	tagName: 'table'
});