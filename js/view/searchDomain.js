// SEARCH ITEMVIEW
SearchDomainItemView = Backbone.Marionette.ItemView.extend({
	template: "#searchList_template",
	tagName: 'tr',

	events: {
		'click .domain_link' : 'clickEvent'
	},

	clickEvent: function() {
		MyApp.trigger('domainChosen', this.model);
	}
});


// SEARCH COLLECTIONVIEW
SearchDomainCollectionView = Backbone.Marionette.CollectionView.extend({
	childView: SearchDomainItemView,
	tagName: 'table',
});