MyApp.module('Layout', function (Layout, MyApp, Backbone) {

    Layout.Root = Backbone.Marionette.LayoutView.extend({
        el: 'body',
        regions: {
        	search: "#search",
        	searchList: "#searchList",
        	counters: "#counters",
        	select: "#select",
        	search2: "#search2",
        	domainList: "#domainList",
            submit: "#submit",
            create: "#create",
            title: "#title"
        }
    });
});



