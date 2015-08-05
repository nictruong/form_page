MyApp.module('Main', function (Main, MyApp, Backbone, Marionette, $, _){

	Main.Controller = Marionette.Controller.extend({
		start: function() {
			console.log("MyApp Controller start...");

			Main.root = new MyApp.Layout.Root();

			this.pageList = new PageList()

			this.pageList.url = '../public_page/test.json';

			var self = this;

			this.pageList.fetch({
				success: function() {
					self.showCurrentPages();
				}
			});
		},

		showCurrentPages: function() {
			this.searchCurrentPagesItemView = new SearchCurrentPagesItemView({collection: this.pageList});
			Main.root.showChildView('search', this.searchCurrentPagesItemView);
		},

		showFilteredList: function(filteredPageList) {
			this.searchCollectionView = new SearchCollectionView({collection : filteredPageList});
        	Main.root.showChildView('searchList', this.searchCollectionView);
		},

		showForm: function(page, counterList) {
			this.page = page;
			this.counterList = counterList;
			this.searchCollectionView.remove();

			var displayedName = new Backbone.Model(this.page.get('displayedName'));

			var displayedTitleItemView = new DisplayedTitleItemView({model: displayedName});
			Main.root.showChildView('title', displayedTitleItemView);

			var counterCollectionView = new CounterCollectionView({collection: this.counterList});
			Main.root.showChildView('counters', counterCollectionView);

			var createItemView = new CreateItemView({page: this.page});
			Main.root.showChildView('create', createItemView);
		},

		showSearch: function() {
			this.search = new SearchView();
			Main.root.showChildView('search2', this.search);
		},

		showFilteredDomain: function(domainList) {
			this.searchDomainCollectionView = new SearchDomainCollectionView({collection : domainList});
        	Main.root.showChildView('domainList', this.searchDomainCollectionView);
		},

		showDomainCounters: function(domain) {
			var counterList = new CounterList(domain.toJSON().counters);

			var domainCounterSelectCollectionView = new DomainCounterSelectCollectionView({collection: counterList});
			Main.root.showChildView('select', domainCounterSelectCollectionView);

			var submitItemView = new SubmitItemView({counters: counterList});
			Main.root.showChildView('submit', submitItemView);
		},

		updateForm: function(counterList) {

			this.counterList = new CounterList(_.union(this.counterList.toJSON(), counterList.toJSON()));
			
			this.showForm(this.page, this.counterList);
		}
	});

	MyApp.on('start', function() {
		Main.controller = new Main.Controller();
		Main.controller.start();
	});

	MyApp.on('filteredPageList', function(options){
		Main.controller.showFilteredList(options);
	});

	MyApp.on('pageChosen', function(options){ // Options = selected page (model)
		Main.controller.showForm(options, new CounterList(options.get('counting_site')));
		Main.controller.showSearch();
	});

	MyApp.on('search', function(options){
		Main.controller.showFilteredDomain(options);
	});

	MyApp.on('domainChosen', function(options){
		Main.controller.showDomainCounters(options);
	});

	MyApp.on('includeCounters', function(options) {
		Main.controller.updateForm(options);
	})
});