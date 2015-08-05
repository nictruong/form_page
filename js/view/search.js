var SearchView = Backbone.Marionette.ItemView.extend({
    template: "#search2_template",

    events: {
        "click #search_button" : "showSearch",
        "keypress #search_input"   : "keyAction"
    },

    showSearch: function() {

        var query = $("#search_input").val();
        console.log("You have searched: " + query);

        var domainList = new DomainList();

        domainList.url = "https://api.eco-counter-tools.com/v1/" + MyApp.apiKey + "/domains/search/"
                        + query;

        domainList.fetch({
            success: function() {
                MyApp.trigger('search', domainList);
            }
        });
    },

    keyAction: function(e) {
        if (e.which == 13) {
            this.showSearch();
            event.preventDefault();
            return false;
        }
    }
});