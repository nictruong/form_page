var SearchCurrentPagesItemView = Backbone.Marionette.ItemView.extend({
	template: "#search_template",

	events: {
		"click #searchPage_button": "search",
		"keypress #searchPage" : "keyAction"
	},

	search: function() {

		var query = $('#searchPage').val();

		MyApp.trigger('filteredPageList', this.collection.byQuery(query));
	},

	keyAction: function(e) {
        if (e.which == 13) {
            this.search();
            event.preventDefault();
            return false;
        }
    }
});